import { FC } from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Container } from '@chakra-ui/react';

import NavBar, { RouteItem } from '../navbar/NavBar';

import { RoutesNames } from '.';
import Home from '../home';

const HerosRouter: FC<RouteComponentProps> = ({ match }) => {
  const routes: RouteItem[] = [
    {
      id: nanoid(),
      path: RoutesNames.dashboardHome,
      label: 'Home',
      title: 'Home',
    },
    {
      id: nanoid(),
      path: RoutesNames.dashboardMarvel,
      label: 'Marvel',
      title: 'Marvel Heros',
    },
    {
      id: nanoid(),
      path: RoutesNames.dashboardDc,
      label: 'DC',
      title: 'DC Heros',
    },
  ];

  return (
    <Container maxW="container.lg" bg="gray.800" color="orange.100">
      <NavBar routeItems={routes} />
      <div>
        <Switch>
          <Route exact path={`${match.path}/${RoutesNames.dashboardHome}`}>
            <Home />
          </Route>

          <Route exact path={`${match.path}/${RoutesNames.dashboardMarvel}`}>
            <h1>Marvel</h1>
          </Route>

          <Route exact path={`${match.path}/${RoutesNames.dashboardDc}`}>
            <h1>DC</h1>
          </Route>

          <Redirect to={`${match.path}/${RoutesNames.dashboardHome}`} />
        </Switch>
      </div>
    </Container>
  );
};

export default HerosRouter;
