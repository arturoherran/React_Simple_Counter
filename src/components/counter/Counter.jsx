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
    }
    

    render() {
        return (
            <div className="counter"> 
                <div className="btnRow">
                    <CounterButton by={1} incrementMethod = { this.increment}/>
                    <CounterButton by={5} incrementMethod = { this.increment}/>
                    <CounterButton by={10} incrementMethod = { this.increment}/>
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
        console.log(`increment value by - ${by} `)
        this.setState({
            state: this.state.counter+= by
        })
    }

    reset = () => {

        this.setState({
            counter: this.state.counter = 0
        })

    }
}

export default Counter;