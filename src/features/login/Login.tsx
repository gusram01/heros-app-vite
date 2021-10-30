import { Link, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { RoutesNames } from '../router';

const Login = () => {
  return (
    <Container minH="100vh">
      <Link as={RouterLink} to={`/${RoutesNames.rootDashboard}`} p="4">
        Login
      </Link>
    </Container>
  );
};

export default Login;
