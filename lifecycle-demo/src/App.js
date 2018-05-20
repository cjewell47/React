import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Chuck'
    }
    console.log('Constructor')
  }
  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth:window.innerWidth})
    }
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        name: {this.state.name}
         innerWidth: {this.state.innerWidth}
         <Child name={this.state.name}/>
      </div>
    );
  }
}

export default App;
