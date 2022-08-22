import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Tasks } from './Tasks';
import { store } from './../../redux/store';

const render = (component) => rtlRender(<Provider store={store}>{component}</Provider>);

test('render content', () => {
  render(<Tasks />);
  const title = screen.getByText(/Mis Tareas/i);
  expect(title).toBeInTheDocument();
});
