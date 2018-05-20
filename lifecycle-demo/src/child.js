import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  constructor(){
    super()

    console.log('child Constructor')
  }
  componentWillMount(){
    console.log('child componentWillMount');
  }

  componentDidMount(){
    console.log('child componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProp, nextState){
    console.log('child shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('child componentWillUpdate');
  }
  componentDidUpdate(prevProp, prevState){
    console.log('child prevProp', prevProp);
    console.log('child prevState', prevState);
    console.log('child componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }

  render() {
    console.log('child render');
    return (
      <div className="App">
        name: {this.props.name}
      </div>
    );
  }
}

export default Child;
