import React, { PureComponent } from 'react';

var btnStyle = {
  color: 'darkblue',
  backgroundColor: '#0df5ed',
};

// Option 1 - automatically checks if needs re-rendering when incoming props. but misses deeply nested objects
class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  // Option 2 - instead of PureComponents, check yourself
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps, nextState);
  //   return (this.state.count !== nextState.count) ? true : false;
  // }

  updateCount = () => {
    this.setState(state => { return { count: state.count + 1 } });
  }

  render() {
    console.log('\t == CounterButton');
    return <a className="f6 link dim ph3 pv2 mb2 dib white" style={btnStyle} href="#0" color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</a>;
  }
}

export default CounterButton;