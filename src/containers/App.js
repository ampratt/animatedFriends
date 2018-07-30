import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
// import { friends } from './friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ friends: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { friends, searchfield } = this.state;
    const filteredFriends = friends.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (!friends.length)
      ? <h1>Loading...</h1>
      :
      (
        <div className='tc' >
          <header className='pb2'>
            <h1 className='f1' >Animated Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </header>
          <Scroll>
            <ErrorBoundry>
              <CardList friends={filteredFriends} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;