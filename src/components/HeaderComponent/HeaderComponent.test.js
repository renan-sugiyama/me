import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { HeaderComponent } from './HeaderComponent';

test('renders HeaderComponent component', () => {
  render(
    <HeaderComponent data={{
      number: 4510001114,
      serial: 11223344,
      buyer: "MTP West Buyer",
      price: 20000,
      currency: "USD",
      createdAt: "2020-04-16T15:32:55.382Z",
      status: "Need to confirm",
      contact: {
        name: "Jacksonville Group (Jason Burn)",
        email: "jacksonvillegroup@me.com",
        phone: "903-575-3050",
        fax: "999-575-3050"
      }
    }} />
  );
  expect(screen.getByText(/999-575-3050/i)).toBeInTheDocument();
  expect(screen.getByText(/MTP West Buyer/i)).toBeInTheDocument();
  expect(screen.getByText(/4510001114/i)).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
});
