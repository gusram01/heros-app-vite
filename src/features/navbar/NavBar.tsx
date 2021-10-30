import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Flex, Heading, Link, Box, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RoutesNames } from '../router';

export interface RouteItem {
  id: string;
  path: string;
  label: string;
  title: string;
}

const NavBar = ({ routeItems }: { routeItems: RouteItem[] }) => {
  const location = useLocation();
  const [title, setTitle] = useState('/');

  useEffect(() => {
    const locationTitle = routeItems.find(
      (routeItem) =>
        location.pathname === `/${RoutesNames.rootDashboard}/${routeItem.path}`
    )?.title;
    setTitle(locationTitle || 'Home');
  }, [location.pathname]);

  return (
    <Flex align="center" minH="24">
      <Box p="2">
        <Heading>{title}</Heading>
      </Box>

      <Spacer />

      {routeItems.map((routeItem) => (
        <Link as={RouterLink} to={routeItem.path} key={routeItem.id}>
          <Box p="2">{routeItem.label}</Box>
        </Link>
      ))}

      <Box p="2">
        <Link as={RouterLink} to={`/${RoutesNames.rootAuth}`}>
          Logout
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
