import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    
    //en el constructor, definimos el estdo inicial
    //state => counter 0

    constructor() {

        super(); //llamamos super para usar this en el constructor
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.incrementTen = this.incrementTen.bind(this);
        this.decrement = this.decrement.bind(this);
        this.decrementTen = this.decrementTen.bind(this);
    }
    
    render() {
        return (
            <div className="counter">
                <div className= "myButtons">
                    <button onClick={ this.increment }> +1 </button>
                    <button onClick={ this.incrementTen }> +10 </button>
                    <button onClick={ this.decrement }> -1 </button>
                    <button onClick={ this.decrementTen }> -10 </button>
                </div>
                <div className= "myButtons">
                    <button onClick={ this.incrementTwo }> +2 </button>
                    <button onClick={ this.incrementTwenty }> +20 </button>
                    <button onClick={ this.decrementTwo }> -2 </button>
                    <button onClick={ this.decrementTwenty }> -20 </button>
                </div>
                <div>
                    <span className="countDisplay"> {this.state.counter} </span>                    
                </div> 
                <div>
                    <button style={ {width: "100%"}} onClick= { this.reset }> RESET COUNT </button>
                </div>


            </div>
        );
    }
     
    increment() {
        this.setState({
            state: this.state.counter++
        })
    }

    incrementTen() {
        this.setState({
            state: this.state.counter+=10
        })
    }

    decrement() {
        this.setState({
            state: this.state.counter--
        })
    }

    decrementTen() {
        this.setState({
            state: this.state.counter-=10
        })
    }

    //Esta sintaxis nos ayuda a no tener que hacer el binding en el constructor
    incrementTwo = () => {
        this.setState({
            state: this.state.counter+=2
        })
    }

    incrementTwenty = () => {
        this.setState({
            state: this.state.counter+=20
        })
    }

    decrementTwo = () => {
        this.setState({
            state: this.state.counter-=2
        })
    }

    decrementTwenty = () => {
        this.setState({
            state: this.state.counter-=20
        })
    }


    reset = () => {
        this.setState({
            counter: this.state.counter = 0
        })

    }

}

export default Counter;