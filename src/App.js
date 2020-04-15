import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';
import './UserInput/UserInput.css';
import './UserOutput/UserOutput.css';

class App extends Component {
  state = {
    username: "NiceAndCozy"
  }

  switchUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput name={this.state.username} changed={this.switchUsernameHandler} />
      </div>
    );
  }
}

export default App;
