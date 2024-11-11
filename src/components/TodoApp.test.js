// src/components/TodoApp.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

test('renders the Todo App', () => {
  render(<TodoApp />);
  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
});

test('can add a new task', () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText('Add new task');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('can delete a task', () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText('Add new task');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'Task to delete' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Task to delete')).toBeNull();
});
