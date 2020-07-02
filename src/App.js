//import for styling
import 'bootstrap/dist/css/bootstrap.min.css';


//Components import
import React, { Component } from 'react';
import ToDoApp from './components/todo/ToDoApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        
        {/* {<Counter/>} ---this is how you comment! haha without the lines --- */}
        <ToDoApp/> 

      </div>
    );
  }
}

export default App;
