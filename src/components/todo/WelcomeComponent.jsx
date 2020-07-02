import "./WelcomeComponent.css"
import React, { Component } from 'react'
import ToDoApp from "./ToDoApp"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class WelcomeComponent extends Component {

    render() {
    return (
        
        <div>
            <h1>Welcome back to your To-Do list, {this.props.match.params.name}.</h1> 
        
            <h6>You can  manage your list <Link to= "/List" >HERE</Link></h6>
        </div>
    )}

}

export class ListToDosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: 
            [
                {id: 1, description: "Learn React JS", done: false, targetDate: (new Date()).toLocaleDateString('es-MX', DATE_OPTIONS) },
                {id: 2, description: "Learn Spring Boot", done: false, targetDate: (new Date()).toLocaleDateString('es-MX', DATE_OPTIONS)},
                {id: 3, description: "Practice af", done: true, targetDate: (new Date()).toLocaleDateString('es-MX', DATE_OPTIONS)}
            ]
        }
    }

    

    render() {
        return (
            <div> 
                <h3>Here you will be able to view and modify your To Do list  </h3> 
                
                <Table responsive striped bordered hover variant="dark" className="myTodos">
                    <thead>
                        <th> ID </th>
                        <th> Description </th>
                        <th> Done </th>
                        <th> Due Date </th>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map ( todo => 
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                                )
                            
                        }
                    </tbody>
                </Table>
            </div> 
    )}
}

export default WelcomeComponent;