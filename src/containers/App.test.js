import React from 'react';
import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('test loading in home page', async () => {
  render(<App />);
  expect(screen.getByTestId(/loading/i)).toBeInTheDocument();
});
