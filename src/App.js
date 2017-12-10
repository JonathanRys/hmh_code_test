import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Profile from './Profile'
import History from './History'

import { connect } from 'react-redux'

const mapStateToProps = (data) => {
  return data
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      history: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header { ...this.props.store.getState().data } />
        <div className="content">
          <Profile store={ this.props.store } />
          <History { ...this.props.store.getState() } />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)
