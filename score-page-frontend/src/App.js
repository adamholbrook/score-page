import React, { Component } from 'react';
import Teams from './components/teams';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
};

}
  componentDidMount() {
    fetch('https://www.api-football.com/demo/api/v2/teams/team/24')
    .then(res => res.json())
    .then((data) => {
      this.setState({ teams: data.api.teams })
    })
    .catch(console.log)
  }

  render() {
    console.log(this.state);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Team scores and details page!
        </p>
      </header>
      <div id='form-holder'>
        <div id='team-input'>
          <label for="name" id='name-label'>Team Name:</label>
          <input type="text" id="team-name" name="team-name" placeholder="Enter your team name here"></input>
        </div>
        <div id='team-details'>
        <Teams teams={this.state.teams}/>
        </div>
      </div>
    </div>
  );
}}

export default App;
