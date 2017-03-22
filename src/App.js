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
  substractFive(e) {
    this.setState({
      buttonValue: (this.state.buttonValue > 4) ? this.state.buttonValue - 5 : 0
    });
  }

  substract(e) {
    this.setState({
      buttonValue: (this.state.buttonValue > 0) ? this.state.buttonValue - 1 : this.state.buttonValue
    });
  }

  add(e) {
    this.setState({
      buttonValue: (this.state.buttonValue < 100) ? this.state.buttonValue + 1 : this.state.buttonValue
    });
  }

  addFive(e) {
    this.setState({
      buttonValue: (this.state.buttonValue < 96) ? this.state.buttonValue + 5 : 100
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
            onClick={this.substractFive.bind(this)}
          >
          -5
          </button>
          <button
            onClick={this.substract.bind(this)}
          >
          -
          </button>
          <button
            onClick={this.add.bind(this)}
          >
          +
          </button>
          <button
            onClick={this.addFive.bind(this)}
          >
          +5
          </button>
        </div>
        {/*Toggle Modal*/}
        <div>
          <button className={this.state.buttonToggle ? "button toggled" : "button"} onClick={this.handleClick.bind(this)}>Click me!!!</button>
        </div>
      </div>
    );
  }
}

export default App;
