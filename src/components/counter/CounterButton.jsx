import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class CounterButton extends Component {
    
    //en el constructor, definimos el estdo inicial
    //state => counter 0
    // constructor() {

    //     super(); //llamamos super para usar this en el constructor
    //     // this.state = {
    //     //     counter: 0
    //     // }

    //     // this.increment = this.increment.bind(this);
    //     // this.decrement = this.decrement.bind(this);
    // }
    

    render() {
        return (
            <div className="CounterButton">
                <div>
                    <button onClick={ () => this.props.incrementMethod(this.props.by) }> + {this.props.by} </button>
                    <button onClick={ () => this.props.decrementMethod(this.props.by) }> - {this.props.by} </button>
                </div>
            </div>
        );
    }

    // increment() {
    //     this.setState({
    //         state: this.state.counter + this.props.by
    //     })

    //     this.props.incrementMethod(this.props.by);
    // }

    
    // decrement() {
    //     this.setState({
    //         state: this.state.counter - this.props.by
    //     })

    //     this.props.decrementMethod(this.props.by);
    // }
}

CounterButton.defaultProps = { 
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton;