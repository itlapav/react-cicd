import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pavan Itla welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pavan Itla Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
