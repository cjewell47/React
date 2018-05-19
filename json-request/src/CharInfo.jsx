import React, { Component } from 'react';

class CharInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }

    this.open = this.open.bind(this);
  }
  open() {
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    const {info} = this.props;
    if (!this.state.expanded) {
      return (
        <p className="btn btn-info" onClick={this.open}>Show info</p>
      )
    } else {
      return (
        <div>
          <p className="btn btn-info" onClick={this.open}>Hide info</p>
          <ul>
            <li><h2>Gender: {info.gender}</h2></li>
            <li><h2>Films: {info.films.length}</h2></li>
          </ul>
        </div>
      )
    }
  }
}

export default CharInfo;
