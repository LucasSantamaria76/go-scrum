import React from 'react';
import { render, screen } from '@testing-library/react';

import { Login } from '../views/auth/Login/Login.jsx';

describe('Login Page mount', () => {
  it('should show the title in the login', () => {
    render(<Login />);
    expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
  });
});
