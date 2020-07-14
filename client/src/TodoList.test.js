import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Renders Todo List Correctly', () => {
  const { getByText } = render(<TodoList tasks={["masak ikan", "minum air"]} />);
  const linkElement = getByText(/masak ikan/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement = getByText(/minum air/i);
  expect(linkElement).toBeInTheDocument();
});
