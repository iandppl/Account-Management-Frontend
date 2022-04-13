// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App.tsx';
import Login from '../component/auth/Login.tsx';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


test('renders learn react link', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Don't have an account yet?/i);
  expect(linkElement).toBeInTheDocument();
});