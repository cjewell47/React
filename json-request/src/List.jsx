import React, { Component } from 'react';
import CharInfo from './CharInfo';

function searchingFor(term) {
  return function(x) {
    let length = term.length;
    console.log('x', x)
    return x.name.toLowerCase().startsWith(term.toLowerCase()) || !term;
  }
}

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.searchHandler = this.searchHandler.bind(this)
  }
  searchHandler(e){
    this.setState({term: e.target.value})
  }
  render() {
    const {people} = this.props
    const {term}   = this.state
    return (
      <div className="">
        <form>
          <input type="text"
              onChange={this.searchHandler}
              value={term}
          />
        </form>
        {
          people.filter(searchingFor(term)).map((p) => {
            console.log(p)
            return (
              <div key={p.url}>
                <h1 className="char-name">{p.name}</h1>
                <CharInfo charInfo={p} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default List
