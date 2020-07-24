import "./WelcomeComponent.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import HelloWorldService from "../../api/todo/HelloWorldService.js"

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.retrieveWelcomeMsg = this.retrieveWelcomeMsg.bind(this);
        this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)

        this.state = {
            message: "",
            errorMessage: ""
        }
    }

    render() {
    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column" style={{marginTop: "50px"}}>

            {this.state.errorMessage && <div className="alert alert-warning">{this.state.errorMessage}</div>}
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            
                <main role="main" className="inner cover">
                    <h1 className="cover-header">Welcome back, {this.props.match.params.name}</h1>
                    <p className="lead">Click below to view your To Do List</p>
                    <p className="lead">
                    <Link to= "/List" className="btn btn-lg btn-secondary">HERE</Link>
                    </p>
                </main>
            </div>

            {/* <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            
                <main role="main" className="inner cover">
                    <p className="lead">Click below to get customized welcome message</p>
                    <button onClick={this.retrieveWelcomeMsg} className="btn btn-success"> Get message </button>
                </main>
            </div>

            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <p> {this.state.message}</p>
            </div> */}

        </div>
        
    )}

    retrieveWelcomeMsg() {
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccesfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccesfulResponse(response) {
        console.log(response)
        this.setState( {
            message: response.data.msg,
            errorMessage: ""
        } )
    }

    handleError(error) {
        if(error){
            console.log(error.response.data.message)
            this.setState( {
                errorMessage: error.response.data.message, 
                message: ""
            } )
        }

    }

}


export default WelcomeComponent;