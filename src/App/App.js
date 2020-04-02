import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation.js';
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
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.error(error.message))
  }

  addReservation = (newResy) => {
    const { reservations } = this.state;
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newResy)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ reservations: [...reservations, data] });
      })
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
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
