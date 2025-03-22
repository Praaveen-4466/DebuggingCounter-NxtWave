import React, { Component } from "react";

import "./DebuggingCounter.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncreaseCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onDecreaseCounter = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Count</h1>
          <p className="para">{count}</p>
          <div className="button-container">
            <button className="increase" onClick={this.onIncreaseCounter}>
              Increase
            </button>
            <button className="decrease" onClick={this.onDecreaseCounter}>
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
