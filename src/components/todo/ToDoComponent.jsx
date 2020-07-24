import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'

class ToDoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: 'nuevo comentario 2',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values) {
        console.log(values)
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = "description is required"
        } else if(values.description.length<5){
            errors.description = "description must be 5 characters long at least"
        }

        return errors
    }

    render() {

        let {description, targetDate} = this.state

        return (
            <div>
                <h1>Update your task #{this.props.match.params.id}.</h1>
                <div className="container-sm">
                    <Formik
                        initialValues={ { description, targetDate } }
                        onSubmit = {this.onSubmit}
                        validate = {this.validate}
                    >

                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
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
                                    <button type="submit" className="btn btn-success">Update Item</button>
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