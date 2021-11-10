import { MemoryRouter, Router } from 'react-router-dom';
import { History } from 'history';
import { render, screen } from '../../tests/test-utils';

import { RoutesNames } from '../router';
import { AuthState } from '../auth/models/AuthState';
import { AuthContext } from '../auth/AuthContext';
import { AuthTypes } from '../auth/models/AuthTypes.enum';

import NavBar from './NavBar';

import '@testing-library/jest-dom';

describe('NavBar component', () => {
  const authState: AuthState = {
    isLogged: true,
    username: 'test',
  };

  const contextValue = {
    state: authState,
    dispatch: jest.fn(),
  };

  const historyMock: History<any> = {
    push: jest.fn(),
    location: {
      pathname: '',
      search: '',
      state: '',
      hash: '',
    },
    length: 0,
    action: 'PUSH',
    replace: jest.fn(),
    go: jest.fn(),
    goBack: jest.fn(),
    goForward: jest.fn(),
    block: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  beforeEach(() => {
    render(
      <AuthContext.Provider value={contextValue}>
        <Router history={historyMock}>
          <NavBar />
        </Router>
      </AuthContext.Provider>,
      // @ts-expect-error
      { wrapper: MemoryRouter }
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const imageSrc = '/assets/dc-marvel-logo.webp';

    expect(screen.getByRole('img').getAttribute('src')).toContain(imageSrc);
  });

  it('logout button should execute logout function', () => {
    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    const logoutFinalRoutePath = `/${RoutesNames.rootAuth}`;

    logoutButton.click();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: AuthTypes.logout,
    });

    expect(historyMock.push).toHaveBeenCalledWith(logoutFinalRoutePath);
  });
});
