import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddPerson from './AddPerson'

function searchingFor(term) {
  return function(x) {
    let length = term.length;
    console.log('x', x)
    console.log('term', term)
    console.log('length', length)
    return x.first.toLowerCase().startsWith(term.toLowerCase())
      || x.last.toLowerCase().startsWith(term.toLowerCase())
      || !term;
  }
}

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        term: '',
        people: [
          {
            first: "Andre",
            last: "3000"
          },
          {
            first: "Ghostface",
            last: "Killer"
          },
          {
            first: "Childish",
            last: "Gambino"
          },
          {
            first: "Frank",
            last: "Ocean"
          }
        ]
      }

      this.searchHandler = this.searchHandler.bind(this)
      this.addPerson     = this.addPerson.bind(this)
  }

  searchHandler(e){
    this.setState({term: e.target.value});
  }

  addPerson(person) {
    this.setState((state) => ({
      people: state.people.concat([person])
    }))
  }

  render() {
    const {term, people} = this.state;
    return (
      <div className="App">
        <h3>Search for Rappers</h3>
        <form>
          <input type="text"
              onChange={this.searchHandler}
              value={term}
          />
        </form>
        <AddPerson addNew={this.addPerson} />
        {
          people.filter(searchingFor(term)).map(person =>
            <div>
              <h1>{person.first}</h1>
              <h1>{person.last}</h1>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
