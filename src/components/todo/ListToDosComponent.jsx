import "./WelcomeComponent.css"
import TodoDataService from "../../api/todo/TodoDataService.js"
import AuthenticationService from "./AuthenticationService.js"
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import moment from 'moment'
import Container from "react-bootstrap/Container";

// const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class ListToDosComponent extends Component {

    constructor(props) {
        //console.log("constructor")
        super(props);
        this.state = {
            todos: [],
            message: ''
        }

        this.deleteToDo = this.deleteToDo.bind(this)
        this.refreshToDos = this.refreshToDos.bind(this)
        this.updateToDo = this.updateToDo.bind(this)
        this.addToDo = this.addToDo.bind(this);
    }

    componentDidMount() {
        //console.log("componentDidMount")
        this.refreshToDos();

    }

    refreshToDos() {
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveAllToDos(username)
            .then(
                response => {
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    render() {
        return (
            <>
                <Container className="p-3" style={{ marginTop: "50px" }}>
                    <h1>View your plan</h1>
                    {this.state.message && <div className="alert alert-warning"> {this.state.message}</div>}

                    <Table responsive striped bordered hover variant="dark" className="myTodos">
                        <thead>
                            <tr>
                                <th> Description </th>
                                <th> Done </th>
                                <th> Due Date </th>
                                <th> Delete </th>
                                <th> Update </th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.isDone.toString()}</td>
                                        <td>{
                                            moment(todo.targetDate).format("MMM Do YY")
                                        }</td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => this.deleteToDo(todo.id)}></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-success" onClick={() => this.updateToDo(todo.id)}></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                   <div className="row">
                            <button className="btn" onClick={this.addToDo}>Create New To Do</button>
                   </div> 

                </Container>
            </>
        )
    }

    deleteToDo(id) {
        let username = AuthenticationService.getLoggedInUser();
        TodoDataService.deleteToDo(username, id)
            .then(
                response => {
                    this.setState({ message: `Item ${id} was deleted succesfully` })
                    this.refreshToDos()
                }
            )
    }

    updateToDo(id) {
        this.props.history.push(`/todos/${id}`)
    }

    addToDo() {
        this.props.history.push(`/todos/-1`)
    }

}

export default ListToDosComponent;