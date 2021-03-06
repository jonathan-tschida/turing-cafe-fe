import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

import { getReservations, postReservation, deleteReservation } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('App', () => {
  it('adds a new reservation when the form is filled out', async () => {
    getReservations.mockResolvedValueOnce([]);
    postReservation.mockResolvedValueOnce({
       id: 18939837,
       name: 'Jonathan',
       date: '4/17',
       time: '7:00',
       number: 2
    });
    const { getByText, getByPlaceholderText } = render(
      <App />
    )

    fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Jonathan' } });
    fireEvent.change(getByPlaceholderText('Date (mm/dd)'), { target: { value: '4/17' } });
    fireEvent.change(getByPlaceholderText('Time'), { target: { value: '7:00' } });
    fireEvent.change(getByPlaceholderText('Number of Guests'), { target: { value: '2' } });
    fireEvent.click(getByText('Make Reservation'));

    await waitFor(() => expect(postReservation).toHaveBeenCalled());
    expect(getByText('Jonathan')).toBeInTheDocument();
    expect(getByText('4/17')).toBeInTheDocument();
    expect(getByText('7:00')).toBeInTheDocument();
    expect(getByText('Number of Guests: 2')).toBeInTheDocument();
  });
})
