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
      buttonToggle: false
    }
  }

  update() {
    this.setState({
      counterValue: this.refs.counter.value,
      textValue:  this.refs.text.value,
    });
  }

  substract(value) {
    this.setState({
      buttonValue: (this.state.buttonValue > (value - 1)) ? this.state.buttonValue - value : 0
    });
  }

  add(value) {
    this.setState({
      buttonValue: (this.state.buttonValue < 100 - (value - 1)) ? this.state.buttonValue + value : 100
    });
  }

  handleClick(e) {
    this.setState({
      buttonToggle: !this.state.buttonToggle
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
            onChange={this.update.bind(this)}>
          </input>
        </div>
        {/*Text*/}
        <div>
          Text: {this.state.textValue}<br/>
          <input
            ref="text"
            type="text"
            placeholder="Enter text here..."
            onChange={this.update.bind(this)}>
          </input>
        </div>
      {/*Button*/}
        <div>
          Output Value: {this.state.buttonValue}<br/>
          <button
            onClick={() => this.substract(5)}
          >
          -5
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
            onClick={() => this.add(5)}
          >
          +5
          </button>
        </div>
        {/*Toggle Modal*/}
        <div>
          <a className={this.state.buttonToggle ? "button toggled" : "button"} onClick={this.handleClick.bind(this)}>Click me!!!</a>
        </div>
      </div>
    );
  }
}

export default App;
