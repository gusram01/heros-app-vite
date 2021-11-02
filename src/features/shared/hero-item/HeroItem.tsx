import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Image, Link, Badge, Center } from '@chakra-ui/react';

import { Hero as IHero } from 'core/models/Hero';
import { RoutesNames } from 'features/router';

const HeroItem: FC<IHero> = ({ id, superhero, alter_ego, publisher }) => {
  return (
    <Box
      width={48}
      height="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Center>
        <Image
          src={`/assets/${id}.jpg`}
          alt={`${superhero} image`}
          boxSize={48}
          objectFit="cover"
          objectPosition="top"
        />
      </Center>

      <Box p="6" maxW="28ch">
        <Center>
          <Badge borderRadius="full" px="4" py="1" colorScheme="teal">
            {publisher.toUpperCase()}
          </Badge>
        </Center>

        <Box mt="6" fontWeight="semibold" as="h2" fontSize={28} isTruncated>
          {superhero}
        </Box>

        <Box>{alter_ego}</Box>

        <Box marginTop={4} color="blue.200" fontSize={14}>
          <Link
            as={RouterLink}
            to={`/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHero}/${id}`}
          >
            More info...
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroItem;
