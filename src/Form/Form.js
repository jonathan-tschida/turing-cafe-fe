import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      date: null,
      time: null,
      number: null
    }
  }

  updateState = (event) => {
    const keyName = event.target.name;
    const newValue = event.target.value;
    this.setState({ [keyName]: newValue })
  }

  render() {
    return (
      <form>
        <input name='name' placeholder='Name' onChange={this.updateState} />
        <input name='date' placeholder='Date (mm/dd)' onChange={this.updateState} />
        <input name='time' placeholder='Time' onChange={this.updateState} />
        <input name='number' placeholder='Number of Guests' onChange={this.updateState} />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
