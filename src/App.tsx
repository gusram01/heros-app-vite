import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './features/router';

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
