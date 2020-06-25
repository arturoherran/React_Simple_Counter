import React, { Component } from 'react';
import CounterButton from './CounterButton'
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
        this.decrement = this.decrement.bind(this);
    }
    

    render() {
        return (
            <div className="counter"> 
                <div className="btnRow">
                    <CounterButton by={1} incrementMethod = { this.increment} decrementMethod = { this.decrement}/> 
                    <CounterButton by={5} incrementMethod = { this.increment} decrementMethod = { this.decrement}/>
                    <CounterButton by={10} incrementMethod = { this.increment} decrementMethod = { this.decrement}/>
                </div>
                    
                
                <div>
                    <span className="countDisplay"> {this.state.counter} </span>                    
                </div> 
                <div>
                    <button style={ {width: "100%"}} onClick= { this.reset } resetMethod = { this.reset }> RESET COUNT </button>
                </div>
            </div>
        );
    }

    increment(by) {
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by}
            })
    }

    decrement(by) {
        this.setState(
            (prevState) => {
            return {counter: prevState.counter - by}
            })
    }

    reset = () => {

        this.setState({
            counter: 0
        })

    }
}

export default Counter;