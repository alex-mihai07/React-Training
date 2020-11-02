import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders add courses header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/add courses/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders course input', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId(/input-course/i);
  expect(element).toBeInTheDocument();
});

test('renders button add course', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId(/btn-add-course/i);
  expect(element).toBeInTheDocument();
});

test('renders button reset course', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId(/btn-reset-course/i);
  expect(element).toBeInTheDocument();
});
