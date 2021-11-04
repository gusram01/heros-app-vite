import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Home from '../home';
import NavBar from '../navbar/NavBar';
import HeroDetail from '../hero-detail/HeroDetail';
import HerosListPage from '../shared/heros-list-page/HerosListPage';

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
          component={HerosListPage}
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
