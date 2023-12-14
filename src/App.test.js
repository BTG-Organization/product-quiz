import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Take The BTG Quiz/i);
  expect(linkElement).toBeInTheDocument();
});
