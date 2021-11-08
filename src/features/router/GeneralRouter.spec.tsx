import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '../../tests/test-utils';

import { AuthContext } from '../auth/AuthContext';
import { AuthState } from '../auth/models/AuthState';
import GeneralRouter from './GeneralRouter';

import '@testing-library/jest-dom';

describe('GeneralRouter component', () => {
  const authState: AuthState = {
    isLogged: false,
  };

  const contextValue = {
    state: authState,
    dispatch: jest.fn(),
  };

  it('should render login page if the user is not authenticated', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <GeneralRouter />
      </AuthContext.Provider>,
      // @ts-expect-error
      { wrapper: MemoryRouter }
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should render heros home page if the user is authenticated', () => {
    const authState: AuthState = {
      isLogged: true,
      username: 'test',
    };

    const contextValue = {
      state: authState,
      dispatch: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <GeneralRouter />
      </AuthContext.Provider>,
      // @ts-expect-error
      { wrapper: MemoryRouter }
    );

    expect(
      screen.getByText(`Welcome ${authState.username}`)
    ).toBeInTheDocument();
  });
});
