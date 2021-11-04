import { authReducer, firstState } from './auth-reducer';
import { AuthTypes } from './models/AuthTypes.enum';
import { AuthState } from './models/AuthState';

describe('authReducer', () => {
  it('type login should have been called and return logged state', () => {
    const reducerSpy = jest.fn(authReducer);

    const defaultLoggedStateWithNoPayload: AuthState = {
      isLogged: true,
    };

    const state = reducerSpy(firstState, {
      type: AuthTypes.login,
    });

    expect(reducerSpy).toHaveBeenCalled();
    expect(state).toEqual(defaultLoggedStateWithNoPayload);
  });

  it('type logout should have been called and return unlogged state', () => {
    const reducerSpy = jest.fn(authReducer);

    const defaultUnloggedState: AuthState = {
      isLogged: false,
    };

    const state = reducerSpy(firstState, {
      type: AuthTypes.logout,
    });

    expect(reducerSpy).toHaveBeenCalled();
    expect(state).toEqual(defaultUnloggedState);
  });

  it('should return the sended payload within state', () => {
    const payloadToSend = {
      username: 'test',
    };

    const expectedState: AuthState = {
      isLogged: true,
      ...payloadToSend,
    };

    const state = authReducer(firstState, {
      type: AuthTypes.login,
      payload: { ...payloadToSend },
    });

    expect(expectedState).toEqual(state);
  });

  it('should return the unlogged state', () => {
    const expectedState: AuthState = {
      isLogged: false,
    };

    const state = authReducer(firstState, {
      type: AuthTypes.logout,
    });

    expect(expectedState).toEqual(state);
  });
});
