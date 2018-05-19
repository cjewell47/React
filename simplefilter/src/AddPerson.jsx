import React, { Component } from 'react';

class AddPerson extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newPerson: {
        first: '',
        last: ''
      }
    }

    this.updateNewPersonFirst = this.updateNewPersonFirst.bind(this)
    this.updateNewPersonLast  = this.updateNewPersonLast.bind(this)
    this.handleAddNew         = this.handleAddNew.bind(this)
  }
  updateNewPersonFirst(e) {
    this.setState({
      // newPerson.first: e.target.value
      newPerson: Object.assign({}, this.state.newPerson, {first: e.target.value})
    })
  }
  updateNewPersonLast(e) {
    this.setState({
      newPerson: Object.assign({}, this.state.newPerson, {last: e.target.value})
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newPerson)
    this.setState({
      newPerson: {
        first: '',
        last: ''
      }
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newPerson.first}
          onChange={this.updateNewPersonFirst}
        />
        <input
          type="text"
          value={this.state.newPerson.last}
          onChange={this.updateNewPersonLast}
        />
        <button onClick={this.handleAddNew}> Add Rapper </button>
      </div>
    )
  }
}

export default AddPerson
