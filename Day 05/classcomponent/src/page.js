import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      displayName: props.name // Initialize state with the prop value
    };
  }

  // Update state based on prop changes
  static getDerivedStateFromProps(nextProps, prevState) {

    console.log("Get derived state from props");
    // If the name prop has changed, update the state
    if (nextProps.name !== prevState.displayName) {
      return {
        displayName: nextProps.name
      };
    }
    // Return null if no state update is needed
    return null;
  }

  render() {
    return (
      <div>
        {this.state.displayName} {/* Use the state to render */}
      </div>
    );
  }
}
