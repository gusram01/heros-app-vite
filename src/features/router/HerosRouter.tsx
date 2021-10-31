import { FC } from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Container } from '@chakra-ui/react';

import Home from 'features/home';
import DCScreen from 'features/dc-screen/DCScreen';
import MarvelScreen from 'features/marvel-screen/MarvelScreen';
import NavBar, { RouteItem } from 'features/navbar/NavBar';

import { RoutesNames } from '.';

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
    <Container maxW="container.lg">
      <NavBar routeItems={routes} />
      <div>
        <Switch>
          <Route
            exact
            path={`${match.path}/${RoutesNames.dashboardHome}`}
            component={Home}
          />

          <Route
            exact
            path={`${match.path}/${RoutesNames.dashboardMarvel}`}
            component={MarvelScreen}
          />

          <Route
            exact
            path={`${match.path}/${RoutesNames.dashboardDc}`}
            component={DCScreen}
          />

          <Redirect to={`${match.path}/${RoutesNames.dashboardHome}`} />
        </Switch>
      </div>
    </Container>
  );
};

export default HerosRouter;
