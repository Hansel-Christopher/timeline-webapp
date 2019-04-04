const fs = require('fs');

module.exports = {
    addEventPage: (req, res) => {
        res.render('single.ejs', {
        });
    },
    addEvent: (req, res) => {
        let title = req.body.title;
        let date = req.body.date;
        let eventQuery = "SELECT * FROM `events` WHERE title = '" + title + "'";

        db.query(eventQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Event already exists';
                res.render('single.ejs', {
                    message
                });
            } else {
                let query = "INSERT INTO `events` (title, date) VALUES ('" +
                            title + "', '" + date + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
                }
            });
    },
    addMEventPage:(req, res) => {
        res.render('multi.ejs', {
        });
    },
    addMEvent: (req, res) => {
        let title = req.body.title;
        let date = req.body.sdate;
        let edate = req.body.edate;
        let eventQuery = "SELECT * FROM `events` WHERE title = '" + title + "'";

        db.query(eventQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Event already exists';
                res.render('single.ejs', {
                    message
                });
            } else {
                let query = "INSERT INTO `events` (title, date, end_date) VALUES ('" +
                            title + "', '"+ date + "', '" + edate + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
                }
            });
    },
    viewPage:(req, res) => {

        let query = "SELECT * FROM `events` ORDER BY id ASC";
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('display.ejs', {
                events:result
            });
        
        });
    }

}