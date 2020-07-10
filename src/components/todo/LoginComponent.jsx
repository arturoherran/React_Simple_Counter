import "./LoginComponent.css"
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import AuthenticationService from "./AuthenticationService.js";


class LoginComponent extends Component {
    
    constructor(props){
        super(props)
         
        this.state = {
            username: "",
            password: "",
            hasLoginFailed: false,
            showSuccessMsg: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        console.log(event.target.name + " - " + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        //mi username es "Arturo" y mi password es "micontraseña"
        if(this.state.username === "Arturo" && this.state.password === "micontraseña" )
        {   
            AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)  
        } 
        else 
            this.setState({
                showSuccessMsg: false,
                hasLoginFailed: true
            })
    }

    render() {
        return (

            <Container className="p-3" style={{marginTop: "50px"}}>

                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}

                <h1 className="greeting">Ingresa tus credenciales para ver tu lista</h1>

                <InputGroup className="mb-3 loginData">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" >Username: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="for example:  user123"
                        aria-label="username"
                        aria-describedby="basic-addon1"
                        name="username" value={this.state.username} onChange={this.handleChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3 loginData">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Password: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="password"
                        placeholder="no brainer"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="password" value={this.state.password} onChange={this.handleChange}
                    />
                </InputGroup>

                <Button variant="outline-primary" onClick={this.loginClicked} >Login</Button>

            </Container>
        )
    }
}

export function ErrorComponent() {
    return <div>An Error Occurred. What should I do??</div>
}

export default LoginComponent;