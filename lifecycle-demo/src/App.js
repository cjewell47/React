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

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProp, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProp, prevState){
    console.log('prevProp', prevProp);
    console.log('prevState', prevState);
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  changeState(){
    this.setState({name: 'Joey'})
  }

  unmountChild(){
    this.setState({name: 'Roberto'})
  }

  render() {
    if(this.state.name === 'Roberto'){
      return (<div/>)
    }
    console.log('render');
    return (
      <div className="App">
        name: {this.state.name}
         innerWidth: {this.state.innerWidth}
         <Child name={this.state.name}/>
         <button onClick={this.changeState.bind(this)}>Change State</button>
         <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
