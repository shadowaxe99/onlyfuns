import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../../src/components/Dashboard/Dashboard';

test('renders dashboard component', () => {
  render(<Dashboard />);
  const dashboardElement = screen.getByTestId('dashboard');
  expect(dashboardElement).toBeInTheDocument();
});

test('displays correct number of widgets', () => {
  render(<Dashboard />);
  const widgetElements = screen.getAllByTestId('widget');
  expect(widgetElements.length).toBe(3);
});

test('displays correct title', () => {
  render(<Dashboard />);
  const titleElement = screen.getByText('Dashboard');
  expect(titleElement).toBeInTheDocument();
});