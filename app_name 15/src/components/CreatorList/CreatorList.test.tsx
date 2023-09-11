import React from 'react';
import { render, screen } from '@testing-library/react';
import CreatorList from './CreatorList';

test('renders creator list component', () => {
  render(<CreatorList />);
  const creatorListElement = screen.getByTestId('creator-list');
  expect(creatorListElement).toBeInTheDocument();
});

test('displays correct number of creators', () => {
  const creators = [
    { id: 1, name: 'Creator 1' },
    { id: 2, name: 'Creator 2' },
    { id: 3, name: 'Creator 3' },
  ];
  render(<CreatorList creators={creators} />);
  const creatorElements = screen.getAllByTestId('creator');
  expect(creatorElements.length).toBe(3);
});

test('displays correct creator names', () => {
  const creators = [
    { id: 1, name: 'Creator 1' },
    { id: 2, name: 'Creator 2' },
    { id: 3, name: 'Creator 3' },
  ];
  render(<CreatorList creators={creators} />);
  const creatorElements = screen.getAllByTestId('creator');
  expect(creatorElements[0]).toHaveTextContent('Creator 1');
  expect(creatorElements[1]).toHaveTextContent('Creator 2');
  expect(creatorElements[2]).toHaveTextContent('Creator 3');
});