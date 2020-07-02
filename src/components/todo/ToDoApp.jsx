import "./ToDoApp.css"
import React, { Component } from 'react';
import LoginComponent, { ErrorComponent } from './LoginComponent';
import WelcomeComponent, { ListToDosComponent } from './WelcomeComponent';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                        <Switch>                
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/List" component={ListToDosComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>   
                    <FooterComponent/>    
                </Router>
                
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand"><Link to="/">What's next</Link></div>
                    <ul className="navbar-nav">
                        <li className="nav-link"><Link to="/welcome/Arturo">Home</Link></li>
                        <li className="nav-link"><Link to="/List">To Do List</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><Link to="/login">Login</Link></li>
                        <li className="nav-link"><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return(
            <div>
               <hr/> Footer 
            </div>
        )
    }
}



export default TodoApp;