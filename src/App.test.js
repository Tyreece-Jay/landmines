import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  expect(screen.getByText("LANDMINES")).toBeInTheDocument();
});

test('renders player', () => {
  render(<App />);
  expect(screen.getByAltText("Player")).toBeInTheDocument();
});
