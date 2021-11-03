import { createContext } from 'react';
import { AuthState } from './models/AuthState';

export const AuthContext = createContext<{ state: AuthState; dispatch: any }>(
  {}
);
