import React from 'react';
import './Reservation.css';

const Reservation = (props) => {
  const { name, date, time, number } = props;
  return (
    <article className='resy'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Reservation;
