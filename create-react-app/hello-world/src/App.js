import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';


const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Tony" />
      <HelloWorld name="Paulie" />
      <HelloWorld name="Silvio" />
    </div>);
};

export default App;
