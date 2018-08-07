import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  // componentDidMount() {
  //   console.log('[componentDidMount]');
  // }
  // componentDidUpdate() {
  //   console.log('[componentDidUpdate]');
  // }
  // componentWillUpdate() {
  //   console.log('[componentWillUpdate]');
  // }

  render() {
    console.log('-> header');
    return (
      <div>
        <h1 className='f1' >Animated Friends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}

export default Header;