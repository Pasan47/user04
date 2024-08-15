import React, { Component } from 'react';
import './App.css';
import Page from './page'; // Ensure the path is correct

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World!",
      name: "Sanuri" // Initial name prop value
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      message: prevState.message === "Hello World!" ? "Button Clicked!" : "Hello World!"
    }));
  }

  handleNameChange = () => {
    this.setState((prevState) => ({
      name: prevState.name === "Sanuri" ? "Updated Name" : "Sanuri" // Toggle between two names
    }));
  }

  componentDidMount() {
    console.log("Component did mount");
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>{this.state.message}</p>
          <button onClick={this.handleClick}>Click Me</button>
          <button onClick={this.handleNameChange}>Change Name</button> {/* Button to change the name */}
          <Page name={this.state.name} /> {/* Pass the current name state to Page */}
        </header>
      </div>
    );
  }
}
