const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

const User = require("../models/usergoogle");
const fbUser = require("../models/userfb");
const keys = require("./config");
const opts = {};
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;

passport.serializeUser(function(user, done) {
 done(null, user.id);
});
passport.deserializeUser(function(id, done) {
 User.findById(id).then((user)=>{
  done(null, user.id);
 })
});

//Google login
passport.use(
 new GoogleStrategy(
  {
   clientID: keys.google.clientID,
   clientSecret: keys.google.clientSecret,
   callbackURL: "/auth/google/callback"
  },(accessToken, refreshToken, profile, done)=>{
    User.findOne({ 'googleid' : profile.id }, (err, user) => {
      if (err)
        return done(err);

      if(user){
        console.log("User exsists: "+user);
        return done(null, user);
      }
      else{
        new User({
          name: profile.displayName,
          googleid: profile.id
        }).save().then((user)=>{
          console.log("CreatedUser: " + user);
          done(null, user);
        })
      }
    });
    
  })
);

//Facebook login
passport.use(
  new FacebookStrategy(
    {
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },(accessToken, refreshToken, profile, done) => {
    fbUser.findOneAndUpdate({ facebookId: profile.id }).then((currentUser)=>{
      if(err){
        return done(err);
      }
      if(currentUser){

        console.log("User exsists: "+currentUser);
      }
      else{
        new fbUser({
          name: profile.displayName,
          googleid: profile.id
        }).save().then((newUser)=>{
          console.log("CreatedUser: " + newUser);
          done(null, newUser);
        })
      }
    });
  })
);

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};