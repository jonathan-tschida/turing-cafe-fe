import React from 'react';

const Reservation = (props) => {
  const { name, date, time, number } = props;
  return (
    <article>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel</button>
    </article>
  )
}
