import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';

import helloAction from './Actions';
import './App.css';

class App extends Component {

componentDidMount() {
  this.props.helloAction('hello world');
  
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ini: {this.props.data}</h2>
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
    helloAction: (data) => dispatch(helloAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
