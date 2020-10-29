import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'
import  TodoDataService from '../../api/todo/TodoDataService.js' 
import AuthenticationService from "./AuthenticationService.js"

class ToDoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format("MMM Do YY")
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
 
    componentDidMount() {

        if(this.state.id === -1){
            return 
        }

        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => 
            this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format("MMM Do YY")
            })
            ) 

    }

    onSubmit(values) {

        let username = AuthenticationService.getLoggedInUser()

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        };

        if(this.state.id === -1) {
            TodoDataService.addTodo(username, todo)
            .then(() => this.props.history.push(this.props.history.push(`/List`)))
        }
        else{
            TodoDataService.updateTodo(username, this.state.id, todo)
            .then(() => this.props.history.push(this.props.history.push(`/List`)))
        }

 
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = "description is required"
        } else if(values.description.length<5){
            errors.description = "description must be 5 characters long at least"
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid date';
            console.log(errors.targetDate)
        }

        return errors
    }

    render() {

        let {description, targetDate} = this.state
        let isNew = (this.state.id >= 1) ? false : true;

        //console.log(isNew);

        return (
            <div>
                <h1>Update your task #{this.props.match.params.id}.</h1>
                <div className="mb-3 loginData">
                    <Formik
                        initialValues={ { description, targetDate } }
                        enableReinitialize={true}
                        onSubmit = {this.onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate = {this.validate}
                    >
 
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description">
                                        </Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>targetDate</label>
                                        <Field className="form-control" type="date" name="targetDate">
                                        </Field>
                                    </fieldset>
                                    {isNew && <button type="submit" className="btn btn-success">Save Item</button>}
                                    {!isNew && <button type="submit" className="btn btn-success">Update Item</button>}
                                </Form>
                            )
                        }
                    </Formik>

                </div>

            </div>
        )

    }

}

export default ToDoComponent;   