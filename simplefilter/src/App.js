import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const people = [
  {
    id: 1,
    first: "Andre",
    last: "3000",
    age: 43
  },
  {
    id: 2,
    first: "Ghostface",
    last: "Killer",
    age: 45
  },
  {
    id: 3,
    first: "Childish",
    last: "Gambino",
    age: 30
  },
  {
    id: 4,
    first: "Frank",
    last: "Ocean",
    age: 32
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          people.map(person =>
            <div key={person.id}>
              <h1>{person.first}</h1>
              <h1>{person.last}</h1>
              <h1>{person.age}</h1>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
