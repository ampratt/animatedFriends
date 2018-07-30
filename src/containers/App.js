import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// Redux
import { setSearchField, fetchFriends } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFriends.searchField,
    friends: state.fetchFriends.friends,
    isPending: state.fetchFriends.isPending,
    error: state.fetchFriends.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onFetchFriends: () => dispatch(fetchFriends())    //fetchFriends(dispatch)
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onFetchFriends();
  }

  render() {
    const { searchField, onSearchChange, friends, isPending } = this.props;
    const filteredFriends = friends.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return isPending
      ? <h1>Loading...</h1>
      :
      (
        <div className='tc' >
          <header className='pb2'>
            <h1 className='f1' >Animated Friends</h1>
            <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);