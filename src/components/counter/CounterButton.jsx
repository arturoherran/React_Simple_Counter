import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class CounterButton extends Component {
    
    //en el constructor, definimos el estdo inicial
    //state => counter 0
    constructor() {

        super(); //llamamos super para usar this en el constructor
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }
    

    render() {
        return (
            <div className="CounterButton">
                <div>
                    <button onClick={ this.increment }> + {this.props.by} </button>
                </div>

            </div>
        );
    }

    increment() {
        this.setState({
            state: this.state.counter+=this.props.by
        })

        this.props.incrementMethod(this.props.by);
    }

    reset = () => {
        this.setState({
            counter: this.state.counter = 0
        })

    }
}

CounterButton.defaultProps = { 
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton;