import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservation from './Reservation';

describe('Reservation', () => {
  it('renders correctly', () => {
    const mockResy = {
      id: 420,
      name: 'Jonathan',
      date: '4/17',
      time: '7:00',
      number: 2
    }
    const { getByText } = render(
      <Reservation {...mockResy} />
    )

    expect(getByText('Jonathan')).toBeInTheDocument();
    expect(getByText('4/17')).toBeInTheDocument();
    expect(getByText('7:00')).toBeInTheDocument();
    expect(getByText('Number of Guests: 2')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  })
})
