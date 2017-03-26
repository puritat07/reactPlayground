'use strict';
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counterValue: '0',
      textValue: '',
      buttonValue: 0,
      isOpen: false,
      minVal: 0,
      maxVal: 100,
      stepChange: 5
    }
  }

  update() {
    this.setState({
      counterValue: parseInt(this.refs.counter.value,10) < 100 ? parseInt(this.refs.counter.value,10) : 100,
      textValue:  this.refs.text.value,
      minVal: parseInt(this.refs.minVal.value,10),
      maxVal: parseInt(this.refs.maxVal.value,10),
      stepChange: parseInt(this.refs.stepChange.value,10) > 1 ? parseInt(this.refs.stepChange.value,10) : 2
    });
  }

  substract(step) {
    this.setState({
      buttonValue: (this.state.buttonValue > (this.state.minVal + (step - 1))) ? this.state.buttonValue - step : this.state.minVal
    });
  }

  add(step) {
    this.setState({
      buttonValue: (this.state.buttonValue < (this.state.maxVal - (step - 1))) ? this.state.buttonValue + step : this.state.maxVal
    });
  }

  handleClick(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleOpen(e) {
    this.setstate({
      modalToggle: "modal show"
    });
  }
  handleClose(e) {
    this.setState({
      modalToggle: "modal"
    });
  }

  render() {
    return (
      <div>
        {/*Counter*/}
        <div>
          Counter: {this.state.counterValue}<br/>
          <input
            ref="counter"
            style={
              {
                width:'100px'
              }
            }
            type="number"
            min="0"
            max="100"
            placeholder="Enter 0-100"
            onChange={() => this.update()}>
          </input>
        </div>
        {/*Text*/}
        <div>
          Text: {this.state.textValue}<br/>
          <input
            ref="text"
            type="text"
            placeholder="Enter text here..."
            onChange={() => this.update()}>
          </input>
        </div>
      {/*Button*/}
        <div>
          Output Value: {this.state.buttonValue}<br/>
          <div>
            Min:
            <input
              type="number"
              ref="minVal"
              value={this.state.minVal}
              onChange={(e) => this.update(e)}>
            </input>
            Max:
            <input
              type="number"
              ref="maxVal"
              value={this.state.maxVal}
              onChange={(e) => this.update(e)}>
            </input>
            Step:
            <input
              type="number"
              ref="stepChange"
              value={this.state.stepChange}
              onChange={(e) => this.update(e)}>
            </input>
            <button
              onClick={() => this.substract(this.state.stepChange)}
            >
            -{this.state.stepChange}
            </button>
            <button
              onClick={() => this.substract(1)}
            >
            -
            </button>
            <button
              onClick={() => this.add(1)}
            >
            +
            </button>
            <button
              onClick={() => this.add(this.state.stepChange)}
            >
            +{this.state.stepChange}
            </button>
          </div>
        </div>
        {/*Toggle Modal*/}
        <div>
          <button onClick={this.handleClick.bind(this)}>Click to {this.state.isOpen ? "hide" : "show"}!!!</button>
          <div className={this.state.isOpen ? "modal show" : "modal"}>
            <div className="modal-content">
              <div className="modal-header">
                Hello World
              </div>
              <div className="modal-body">
                Sign in:
                <input
                  type="text"
                  width="100px"
                  placeholder="Enter Username..."
                />
                <br />
                Password:
                <input
                  type="password"
                  width="100px"
                  placeholder="Enter Password..."
                />
                <br />
                <input
                  type="Submit"
                  defaultValue="Sign in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
