import { AuthState } from '../../features/auth/models/AuthState';

const storageUserKey = '[heros-app-vite]/user';

export const setStoredUser = (user: AuthState): void => {
  try {
    localStorage.setItem(storageUserKey, JSON.stringify(user));
  } catch (error) {
    console.error(error);

    throw new Error('Error on save local storage');
  }
};
