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
            <header class="masthead text-white text-center">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 mx-auto">
                            <h1 class="mb-5">Welcome!</h1>
                            <p>No more losing your pending tasks, keep track of what you want to do next</p>
                        </div>
                        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
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