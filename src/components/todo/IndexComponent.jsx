import "./IndexComponent.css"
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.retrieveWelcomeMsg = this.retrieveWelcomeMsg.bind(this);
    }

    render() {
    return (
        <div>
            <header className="masthead text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">Welcome!</h1>
                            <p>No more losing your pending tasks, keep track of what you want to do next</p>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <p className="lead">
                                <Link to= "/login" className="btn btn-lg btn-secondary">Go to Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        
    )}

    retrieveWelcomeMsg() {
        console.log("Welcome brou")
    }

}


export default WelcomeComponent;