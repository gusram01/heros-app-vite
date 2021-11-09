import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../tests/test-utils';
import { AuthContext } from '../auth/AuthContext';
import { AuthState } from '../auth/models/AuthState';

import HerosRouter from './HerosRouter';

import '@testing-library/jest-dom';

describe('Heros router', () => {
  const authState: AuthState = {
    isLogged: true,
    username: 'test',
  };

  const contextValue = {
    state: authState,
    dispatch: jest.fn(),
  };

  it('should render home component', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <HerosRouter />,
      </AuthContext.Provider>,

      // @ts-expect-error
      { wrapper: MemoryRouter }
    );

    expect(
      screen.getByText(`Welcome ${authState.username}`)
    ).toBeInTheDocument();
  });
});
