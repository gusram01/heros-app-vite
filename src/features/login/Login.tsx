import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Button, Center } from '@chakra-ui/react';

import { RoutesNames } from '../router';

const Login: FC<RouteComponentProps> = ({ history }) => {
  const goToDashboard = () => {
    history.push(RoutesNames.rootDashboard);
  };

  return (
    <Container minW="100%" minH="100vh">
      <Center minH="100vh">
        <Button variant="outline" onClick={goToDashboard}>
          Login
        </Button>
      </Center>
    </Container>
  );
};

export default Login;
