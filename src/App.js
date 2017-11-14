import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';

import { helloAction, getIPAddress } from './Actions';
import './App.css';

class App extends Component {

componentDidMount() {
  this.props.helloAction('hello world');
  this.props.getIPAddress();
}

  render() {
  console.log(this.props.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ini: {this.props.data.helloWorld}</h2>
          <h2>IP Address: {this.props.data.ipAddress}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    helloAction: (data) => dispatch(helloAction(data)),
    getIPAddress: () => dispatch(getIPAddress())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
