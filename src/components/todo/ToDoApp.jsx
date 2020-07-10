import "./ToDoApp.css"
import React, { Component } from 'react';
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import LoginComponent, { ErrorComponent } from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ListToDosComponent from './ListToDosComponent'
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import IndexComponent from "./IndexComponent.jsx"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                        <div style={{width: '80%', position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
                            <Switch>                
                                <Route path="/" exact component={IndexComponent}/>
                                <Route path="/login" component={LoginComponent}/>
                                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                                <AuthenticatedRoute path="/List" component={ListToDosComponent}/>
                                <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
                                <Route component={ErrorComponent}/>
                            </Switch>
                        </div>
                           
                    <FooterComponent/>    
                </Router>
            </div>
        )
    }
}

export default TodoApp;