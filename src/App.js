import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal/Modal'
import ButtonRow from './components/ButtonRow/ButtonRow'
import Alert from './components/Alert/Alert'


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
          {type: 'danger', label: "Open!", clicked: this.showContinue},
          {type: 'success', label: "Close!", clicked: this.showCancel}
      ];
      return (
      <div className="App">
          <Modal show={this.state.purchasing} cancel={this.showCancel} title="Some kinda modal title" closed={this.showCancel}>
                <p>This is modal content</p>
                <ButtonRow buttons={buttons}/>
          </Modal>
          <Alert show={this.state.purchasable} type='warning' dismiss={this.showClose}>
              This is a warning type alert
          </Alert>
          <Alert show={this.state.purchasable} type='danger'>
              This is a danger type alert
          </Alert>

      </div>
    );
  };
}

export default App;
