import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation.js';
import { getReservations, postReservation, deleteReservation } from '../apiCalls.js';
import Form from '../Form/Form.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.error(error.message))
  }

  addReservation = (newResy) => {
    const { reservations } = this.state;
    postReservation(newResy)
      .then(data => {
        this.setState({ reservations: [...reservations, data] });
      })
      .catch(error => console.error(error.message))
  }

  cancelReservation = (event) => {
    deleteReservation(event.target.id)
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.error(error.message))
  }

  render() {
    const { reservations } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          {reservations.map(reservation => (
              <Reservation
                key={reservation.id}
                {...reservation}
                cancelReservation={this.cancelReservation}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
