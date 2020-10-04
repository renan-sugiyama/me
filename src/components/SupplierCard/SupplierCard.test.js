import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SupplierCard } from './SupplierCard';

test('renders SupplierCard component', () => {
  render(
    <SupplierCard supplier={{

      code: "101908",
      name: "Motion Industries INC.",
      readAt: "2020-05-23T12:45:20.399Z",
      lastReplyAt: "2020-05-23T13:00:10.380Z",
      document: {
        type: "CNPJ",
        value: "00.823.053/0001-02"
      },
      address: "O Box 1477 - Birmingham AL - 35201-4666 - United States of America",
      contact: {
        name: "Jack Jeff Ripple Applejack",
        email: "jack_jeff_applejack@motion.com",
        phone: "800-296-5522",
        fax: "800-296-5522"
      },

    }} />
  );
  expect(screen.getByText(/Motion Industries INC/i)).toBeInTheDocument();
  expect(screen.getByText(/O Box 1477 - Birmingham AL/i)).toBeInTheDocument();
  expect(screen.getByText(/Jack Jeff Ripple Applejack/i)).toBeInTheDocument();
});
