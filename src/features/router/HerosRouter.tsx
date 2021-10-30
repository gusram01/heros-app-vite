import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Container } from '@chakra-ui/react';

import NavBar, { RouteItem } from '../navbar/NavBar';

import { RoutesNames } from '.';

const HerosRouter = () => {
  const routes: RouteItem[] = [
    {
      id: nanoid(),
      path: RoutesNames.rootHome,
      label: 'Home',
      title: 'Home',
    },
    {
      id: nanoid(),
      path: RoutesNames.rootMarvel,
      label: 'Marvel',
      title: 'Marvel Heros',
    },
    {
      id: nanoid(),
      path: RoutesNames.rootDc,
      label: 'DC',
      title: 'DC Heros',
    },
  ];

  return (
    <Router>
      <Container maxW="container.lg" bg="gray.800" color="orange.100">
        <NavBar routeItems={routes} />

        <Switch>
          <Route exact path={`/${RoutesNames.rootHome}`}>
            <h1>home</h1>
          </Route>

          <Route exact path={`/${RoutesNames.rootMarvel}`}>
            <h1>Marvel</h1>
          </Route>

          <Route exact path={`/${RoutesNames.rootDc}`}>
            <h1>DC</h1>
          </Route>

          <Redirect to={`/${RoutesNames.rootHome}`} />
        </Switch>
      </Container>
    </Router>
  );
};

export default HerosRouter;
