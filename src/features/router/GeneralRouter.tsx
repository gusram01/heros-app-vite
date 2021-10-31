import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Login from 'features/login/Login';

import { HerosRouter, RoutesNames } from '.';

const GeneralRouter = () => {
  return (
    <Router>
      <Container maxW="100%" minHeight="100vh" bg="gray.800" color="orange.100">
        <Container maxW="container.lg">
          <Switch>
            <Route exact path={`/${RoutesNames.rootAuth}`} component={Login} />

            <Route
              path={`/${RoutesNames.rootDashboard}`}
              component={HerosRouter}
            />

            <Redirect to={`/${RoutesNames.rootAuth}`} />
          </Switch>
        </Container>
      </Container>
    </Router>
  );
};

export default GeneralRouter;
