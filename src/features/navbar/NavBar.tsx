import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
  Flex,
  Heading,
  Link,
  Box,
  Spacer,
  Image,
  Button,
} from '@chakra-ui/react';
import { memo } from 'react';
import { RoutesNames } from '../router';

export interface RouteItem {
  id: string;
  path: string;
  label: string;
  title: string;
}

const NavBar = memo(() => {
  const history = useHistory();

  const logout = () => history.push(`/${RoutesNames.rootAuth}`);

  return (
    <Flex align="center" minH="24">
      <Box p="2">
        <Heading>
          <Image
            src="/assets/dc-marvel-logo.webp"
            boxSize={16}
            borderRadius="full"
          />
        </Heading>
      </Box>

      <Spacer />

      <Link
        as={RouterLink}
        to={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHome}`}
      >
        <Box p="2"> Home </Box>
      </Link>

      <Link
        as={RouterLink}
        to={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHeros}/marvel`}
      >
        <Box p="2"> Marvel </Box>
      </Link>

      <Link
        as={RouterLink}
        to={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHeros}/dc`}
      >
        <Box p="2"> DC </Box>
      </Link>

      <Box p="2">
        <Button colorScheme="red" variant="outline" onClick={logout}>
          Logout
        </Button>
      </Box>
    </Flex>
  );
});

export default NavBar;
