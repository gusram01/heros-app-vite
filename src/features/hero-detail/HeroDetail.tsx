import { useMemo } from 'react';
import {
  Container,
  Box,
  Center,
  Image,
  Badge,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { getHeroById } from '../../core/services/getHeroById';
import { RoutesNames } from '../router';

interface ParamsProps {
  heroId: string;
}

const HeroDetail = () => {
  const { heroId } = useParams<ParamsProps>();
  const history = useHistory();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const goBack = () => {
    if (history.length > 1) {
      history.goBack();
    } else {
      history.push(
        `/${RoutesNames.rootDashboard}/${RoutesNames.dashboardHome}`
      );
    }
  };

  if (!hero) {
    return <Redirect to={`/${RoutesNames.rootDashboard}`} />;
  }

  const isCharactersEqualAlterEgo =
    hero.alter_ego.toLowerCase() === hero.characters.toLowerCase();

  return (
    <Container maxW="lg" mt={12}>
      <Center>
        <Stack
          spacing={4}
          direction={{ base: 'column', sm: 'row' }}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="lg"
          p={6}
        >
          <Box width={56} display="flex">
            <Image src={`/assets/${hero.id}.jpg`} objectFit="contain" />
          </Box>

          <Center>
            <Box height="100%" maxW="24ch">
              <Badge>{hero.publisher}</Badge>

              <Box
                mt="8"
                fontWeight="bold"
                fontSize={24}
                as="h2"
                lineHeight="tight"
              >
                {hero.superhero}
              </Box>

              <Box>{hero.alter_ego}</Box>

              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                mt={6}
              >
                <Text>First appearance:</Text>

                {hero.first_appearance}
              </Box>

              {isCharactersEqualAlterEgo ? null : (
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  mt="6"
                >
                  <Text>Characters: </Text>
                  {hero.characters}
                </Box>
              )}
              <Center mt={6}>
                <Button colorScheme="yellow" onClick={goBack}>
                  Go Back
                </Button>
              </Center>
            </Box>
          </Center>
        </Stack>
      </Center>
    </Container>
  );
};

export default HeroDetail;
