import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

import { postReservation } from '../apiCalls.js';
jest.mock('../apiCalls.js');

describe('Form', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Form />
    )

    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
    expect(getByPlaceholderText('Time')).toBeInTheDocument();
    expect(getByPlaceholderText('Number of Guests')).toBeInTheDocument();
    expect(getByText('Make Reservation')).toBeInTheDocument();
  });

  it('calls the right function when making a reservation', () => {
    const mockMakeReservation = jest.fn();
    const mockResy = {
      name: 'Jonathan',
      date: '4/17',
      time: '7:00',
      number: 2
    }
    const { getByText, getByPlaceholderText } = render(
      <Form addReservation={mockMakeReservation} />
    )

    fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Jonathan' } });
    fireEvent.change(getByPlaceholderText('Date (mm/dd)'), { target: { value: '4/17' } });
    fireEvent.change(getByPlaceholderText('Time'), { target: { value: '7:00' } });
    fireEvent.change(getByPlaceholderText('Number of Guests'), { target: { value: '2' } });
    fireEvent.click(getByText('Make Reservation'));

    expect(mockMakeReservation).toHaveBeenCalledWith(mockResy);
  })
})
