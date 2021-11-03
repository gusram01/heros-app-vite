/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RoutesNames } from '.';

interface Props {
  component: FC<any>;
  isAuthenticated: boolean;
  [key: string]: any;
}

const PublicRoute: FC<Props> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) => {
        return isAuthenticated ? (
          <Redirect to={`/${RoutesNames.rootDashboard}`} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
