import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time:'',
      number: ''
    }
  }

  updateState = (event) => {
    const keyName = event.target.name;
    const newValue = event.target.value;
    this.setState({ [keyName]: newValue })
  }

  makeReservation = (event) => {
    event.preventDefault();
    const { name, date, time, number } = this.state;
    const newResy = {
      id: Date.now(),
      name,
      date,
      time,
      number
    }
    this.props.addReservation(newResy);
    this.setState({ name: '', date: '', time: '', number: ''})
  }

  render() {
    const { name, date, time, number } = this.state;
    return (
      <form>
        <input
          name='name'
          placeholder='Name'
          value={name}
          onChange={this.updateState}
        />
        <input
          name='date'
          placeholder='Date (mm/dd)'
          value={date}
          onChange={this.updateState}
        />
        <input
          name='time'
          placeholder='Time'
          value={time}
          onChange={this.updateState}
        />
        <input
          type='number'
          name='number'
          placeholder='Number of Guests'
          value={number}
          onChange={this.updateState}
        />
        <button onClick={this.makeReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
