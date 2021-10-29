import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { nanoid } from 'nanoid';

import NavBar, { RouteItem } from '../navbar/NavBar';

import { RoutesNames } from '.';

const HerosRouter = () => {
  const routes: RouteItem[] = [
    {
      id: nanoid(),
      path: RoutesNames.rootHome,
      label: 'Home',
    },
    {
      id: nanoid(),
      path: RoutesNames.rootMarvel,
      label: 'Marvel',
    },
    {
      id: nanoid(),
      path: RoutesNames.rootDc,
      label: 'DC',
    },
  ];

  return (
    <Router>
      <NavBar routeItems={routes} />

      <div>
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
      </div>
    </Router>
  );
};

export default HerosRouter;
