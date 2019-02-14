import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
      purchasable: true,
      purchasing: true
  };

  showCancel = () => {
    this.setState({purchasing: false});
  };

  showClose = () => {
    this.setState({purchasable: false});
  };

  showContinue = () => {
    alert('You are continue!');
  };

  render() {
      const buttons = [
          {type: 'danger', label: "Don't click me!", clicked: this.buttonClicked},
          {type: 'success', label: "Click me!", clicked: this.buttonClicked}
      ];
  };
}

export default App;
