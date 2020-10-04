import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AddressCard } from './AddressCard';

test('renders AddressCard component', () => {
  render(
    <AddressCard address={{
        "label": "Ship to", "name": "West Plant", "code": "TR01", "address": "1311 W Washington Blvd, Los Angeles, CA 90006, United States", "contact": { "name": "Brian Mazda Tetsuo", "email": "Z01confirmations@me.com", "phone": "222-575-3050", "fax": "222-575-3050" }
      }} />
  );
  expect(screen.getByText(/Ship to/i)).toBeInTheDocument();
});
