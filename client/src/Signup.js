import React from 'react'
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () =>{
    <Content>
         <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>

}
ReactDOM.render(<App />, document.querySelector('#form'));