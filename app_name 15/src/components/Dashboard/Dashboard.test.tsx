import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders dashboard component', () => {
  render(<Dashboard />);
  const dashboardElement = screen.getByTestId('dashboard');
  expect(dashboardElement).toBeInTheDocument();
});

test('displays correct number of creators', () => {
  const creators = [
    { id: 1, name: 'Creator 1' },
    { id: 2, name: 'Creator 2' },
    { id: 3, name: 'Creator 3' },
  ];
  render(<Dashboard creators={creators} />);
  const creatorElements = screen.getAllByTestId('creator');
  expect(creatorElements.length).toBe(3);
});

test('displays loading state when creators are loading', () => {
  render(<Dashboard isLoading />);
  const loadingElement = screen.getByTestId('loading');
  expect(loadingElement).toBeInTheDocument();
});