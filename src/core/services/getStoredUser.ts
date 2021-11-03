import { AuthState } from '../../features/auth/models/AuthState';

const storageUserKey = '[heros-app-vite]/user';

export const getStoredUser = (): AuthState => {
  const user = localStorage.getItem(storageUserKey);

  if (user) {
    return JSON.parse(user) as AuthState;
  }

  return { isLogged: false };
};
