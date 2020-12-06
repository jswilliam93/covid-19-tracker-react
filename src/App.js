import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import NewCase from "./components/NewCase";
import Map from "./components/Map";

function App() {
    const {Header, Content} = Layout;
    return (
        <Router>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/home">New Case</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/map">Cases Map</Link></Menu.Item>
                </Menu>
            </Header>
            <Layout className="layout" style={{backgroundColor: 'white'}}>
                <Content style={{padding: '50px 50px'}}>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"/>
                        </Route>
                        <Route path="/map">
                            <Map />
                        </Route>
                        <Route path="/">
                            <NewCase/>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Router>
    );
}

export default App;
