import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main title and section headings', () => {
  render(<App />);
  expect(screen.getByText(/kei/i)).toBeInTheDocument();
  expect(screen.getByText(/keiichi/i)).toBeInTheDocument();
  expect(screen.getByText(/hayashi/i)).toBeInTheDocument();
});
