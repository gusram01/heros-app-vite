import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Flex, Heading, Link, Box, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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
      (routeItem) => location.pathname === `/${routeItem.path}`
    )?.title;
    setTitle(locationTitle || 'Home');
  }, [location.pathname]);

  return (
    <Flex align="center" p="4">
      <Box p="2">
        <Heading>{title}</Heading>
      </Box>

      <Spacer />

      {routeItems.map((routeItem) => (
        <Link as={RouterLink} to={routeItem.path} key={routeItem.id}>
          <Box p="2">{routeItem.label}</Box>
        </Link>
      ))}
    </Flex>
  );
};

export default NavBar;
