import { Link as RouterLink } from 'react-router-dom';
import { Stack, Link } from '@chakra-ui/react';

export interface RouteItem {
  id: string;
  path: string;
  label: string;
}

const NavBar = ({ routeItems }: { routeItems: RouteItem[] }) => {
  return (
    <div>
      <Stack direction="row">
        {routeItems.map((routeItem) => (
          <Link
            as={RouterLink}
            to={routeItem.path}
            key={routeItem.id}
            colorScheme="blue"
          >
            {routeItem.label}
          </Link>
        ))}
      </Stack>
    </div>
  );
};

export default NavBar;
