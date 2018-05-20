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
