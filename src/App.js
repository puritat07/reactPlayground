import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counterValue: '0',
      textValue: ''
    }
  }

  updateCounter(e) {
    this.setState({
      counterValue: e.target.value
    });
  }
  updateText(e) {
    this.setState({
      textValue:  e.target.value
    });
  }

  render() {
    return (
      <div>
        {/*Counter*/}
        <div>Counter: {this.state.counterValue}</div>
        <input style={{width:'100px'}} type="number" min="0" max="100" placeholder="Enter 0-100" onChange={this.updateCounter.bind(this)}></input>
        {/*Text*/}
        <div>Text: {this.state.textValue}</div>
        <input type="text" placeholder="Enter text here..." onChange={this.updateText.bind(this)}></input>
      </div>
    );
  }
}

export default App;
