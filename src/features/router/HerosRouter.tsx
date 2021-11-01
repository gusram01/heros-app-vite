import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Home from 'features/home';
import HeroDetail from 'features/hero-detail/HeroDetail';
import NavBar from 'features/navbar/NavBar';
import Heros from 'features/shared/heros/Heros';

import { RoutesNames } from '.';

const HerosRouter = () => {
  return (
    <Container maxW="container.lg">
      <NavBar />
      <Switch>
        <Route
          exact
          path={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHome}`}
          component={Home}
        />

        <Route
          exact
          path={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHeros}/:publisher`}
          component={Heros}
        />

        <Route
          exact
          path={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHero}/:heroId`}
          component={HeroDetail}
        />

        <Redirect
          to={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHome}`}
        />
      </Switch>
    </Container>
  );
};

export default HerosRouter;
