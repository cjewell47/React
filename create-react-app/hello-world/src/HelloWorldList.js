import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jimmy', 'Sally', 'Billy Bananas'] };
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name}/>
    ));
  }

  render() {
    return (
      <div className="HelloWorldList">
        {this.renderGreetings()}
      </div>
    );
  }
}
export default HelloWorldList;
