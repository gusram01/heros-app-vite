import { useEffect, useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { getStoredUser, setStoredUser } from 'core/services';
import { authReducer } from 'features/auth/auth-reducer';
import { AuthContext } from 'features/auth/AuthContext';
import { Router } from 'features/router';

import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(authReducer, {}, getStoredUser);

  useEffect(() => {
    setStoredUser(state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </AuthContext.Provider>
  );
};

export default App;
