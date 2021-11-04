import { useContext } from 'react';
import { Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import Login from '../login/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { HerosRouter, RoutesNames } from '.';

const GeneralRouter = () => {
  const { state } = useContext(AuthContext);

  return (
    <Router>
      <Container maxW="100%" minHeight="100vh" bg="gray.800" color="orange.100">
        <Container maxW="container.lg">
          <Switch>
            <PublicRoute
              exact
              path={`/${RoutesNames.rootAuth}`}
              component={Login}
              isAuthenticated={state.isLogged}
            />

            <PrivateRoute
              path={`/${RoutesNames.rootDashboard}`}
              component={HerosRouter}
              isAuthenticated={state.isLogged}
            />

            <Redirect to={`/${RoutesNames.rootAuth}`} />
          </Switch>
        </Container>
      </Container>
    </Router>
  );
};

export default GeneralRouter;
