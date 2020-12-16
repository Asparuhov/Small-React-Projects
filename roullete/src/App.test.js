import { render, screen } from '@testing-library/react';
import Roulette from './components/Roulette/Roulette';

test('renders learn react link', () => {
  render(<Roulette />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
