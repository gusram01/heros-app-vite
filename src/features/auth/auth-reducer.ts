import { AuthState } from './models/AuthState';
import { AuthTypes } from './models/AuthTypes.enum';

export interface Action {
  type: AuthTypes;
  payload?: Partial<AuthState>;
}

export const firstState: AuthState = {
  isLogged: false,
};

export const authReducer = (state: AuthState = firstState, action: Action) => {
  switch (action.type) {
    case AuthTypes.login:
      return {
        ...action.payload,
        isLogged: true,
      };
    case AuthTypes.logout:
      return {
        ...action.payload,
        isLogged: false,
      };

    default:
      return state;
  }
};
