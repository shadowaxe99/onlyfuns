import React from 'react';
import { render, screen } from '@testing-library/react';
import EmailDashboard from '../../../src/components/EmailDashboard/EmailDashboard';

test('renders email dashboard component', () => {
  render(<EmailDashboard />);
  const emailDashboardElement = screen.getByTestId('email-dashboard');
  expect(emailDashboardElement).toBeInTheDocument();
});

test('displays correct number of emails', () => {
  const emails = [
    { id: 1, subject: 'Email 1', sender: 'sender1@example.com' },
    { id: 2, subject: 'Email 2', sender: 'sender2@example.com' },
    { id: 3, subject: 'Email 3', sender: 'sender3@example.com' },
  ];
  render(<EmailDashboard emails={emails} />);
  const emailElements = screen.getAllByTestId('email-item');
  expect(emailElements.length).toBe(emails.length);
});

test('displays correct email details', () => {
  const email = { id: 1, subject: 'Email 1', sender: 'sender1@example.com' };
  render(<EmailDashboard email={email} />);
  const subjectElement = screen.getByText(email.subject);
  const senderElement = screen.getByText(email.sender);
  expect(subjectElement).toBeInTheDocument();
  expect(senderElement).toBeInTheDocument();
});