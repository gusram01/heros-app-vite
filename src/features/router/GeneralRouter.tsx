import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Login from '../login/Login';

import { HerosRouter, RoutesNames } from '.';

const GeneralRouter = () => {
  return (
    <Router>
      <Container maxW="container.lg" bg="gray.800" color="orange.100">
        <Switch>
          <Route exact path={`/${RoutesNames.rootAuth}`} component={Login} />

          <Route
            path={`/${RoutesNames.rootDashboard}`}
            component={HerosRouter}
          />

          <Redirect to={`/${RoutesNames.rootAuth}`} />
        </Switch>
      </Container>
    </Router>
  );
};

export default GeneralRouter;
