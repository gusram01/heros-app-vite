import { FC, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Button, Center } from '@chakra-ui/react';

import { AuthContext } from '../auth/AuthContext';
import { RoutesNames } from '../router';
import { AuthTypes } from '../auth/models/AuthTypes.enum';

const Login: FC<RouteComponentProps> = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const goToDashboard = () => {
    dispatch({ type: AuthTypes.login, payload: { username: 'Gus' } });
    history.push(RoutesNames.rootDashboard);
  };

  return (
    <Container minW="100%" minH="100vh">
      <Center minH="100vh">
        <Button
          colorScheme="yellow"
          variant="outline"
          onClick={goToDashboard}
          role="button"
        >
          Login
        </Button>
      </Center>
    </Container>
  );
};

export default Login;
