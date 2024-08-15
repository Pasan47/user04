import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Hello World!",
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      message: prevState.message === "Hello World!" ? "Button Clicked!" : "Hello World!"
    }));
  }

  componentDidMount (){
    console.log("Component did mount");
  }
  
  componentDidUpdate(prevProp,prevState){
    console.log("Component did update");
  }
  




  render() {
    return (
      <div className='App'>
        <header className='App-header'> 
       <p> {this.state.message}</p>
       <button onClick={this.handleClick}>Click Me</button>
       </header>
      </div>
    )
  }
}





