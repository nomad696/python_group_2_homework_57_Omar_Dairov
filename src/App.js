import React, { Component } from 'react';
import './App.css';
// import Bac

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
          {type: 'danger', label: "Open!", clicked: this.buttonClicked},
          {type: 'success', label: "Close!", clicked: this.buttonClicked}
      ];
  };
}

export default App;
