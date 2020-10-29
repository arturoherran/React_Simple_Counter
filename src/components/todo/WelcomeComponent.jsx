import "./WelcomeComponent.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import AuthenticationService from "./AuthenticationService.js"
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//import HelloWorldService from "../../api/todo/HelloWorldService.js"

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
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column" style={{ marginTop: "50px" }}>

                {this.state.errorMessage && <div className="alert alert-warning">{this.state.errorMessage}</div>}
                <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

                    <main role="main" className="inner cover">
                        <h1 className="cover-header">Welcome back, {this.props.match.params.name}</h1>
                        <p className="lead">Click below to view your To Do List</p>
                        <p className="lead">
                            <Link to="/List" className="btn btn-lg btn-secondary">HERE</Link>
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

        )
    }

    retrieveWelcomeMsg() {
        console.log("show any msg")
        // let username = AuthenticationService.getLoggedInUser()
        // TodoDataService.retrieveAllToDos(username)
        //     .then(
        //         response => {
        //             this.setState({
        //                 todos: response.data[1]
        //             })
        //         }
        //     )
    }

    handleSuccesfulResponse(response) {
        console.log("It was succesful")
        this.setState({
            message: response.data.msg,
            errorMessage: ""
        })
    }

    handleError(error) {
        console.log("failed")
        if (error.message) {
            this.setState({
                message: error.message
            })
        }

        if (error.response && error.response.data) {
            this.setState({
                message: error.response.data.message,
            })

        }

    }

}


export default WelcomeComponent;