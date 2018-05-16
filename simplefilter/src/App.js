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

function searchingFor(term) {
  return function(x) {
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        people: people,
        term: ''
      }

      this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(e){
    this.setState({term: e.target.value});
  }

  render() {
    const {term, people} = this.state;
    return (
      <div className="App">
        <form>
          <input type="text"
              onChange={this.searchHandler}
              value={term}
          />
        </form>
        {
          people.filter(searchingFor(term)).map(person =>
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
