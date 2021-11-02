import { FC } from 'react';
import { Box, Center, Heading, Wrap, WrapItem } from '@chakra-ui/react';

import { Hero } from 'core/models/Hero';
import HeroItem from 'features/shared/hero-item/HeroItem';

interface Props {
  herosList: Hero[];
  emptyMessage: string | undefined;
}

const Heros: FC<Props> = ({
  herosList,
  emptyMessage = 'There is no heros that match with the search',
}) => {
  if (herosList.length < 1) {
    return (
      <Center mt={10}>
        <Box>
          <Heading textAlign="center">{emptyMessage}</Heading>
        </Box>
      </Center>
    );
  }

  return (
    <Wrap justify="center" spacing={6} align="stretch">
      {herosList.map((hero) => (
        <WrapItem key={hero.id}>
          <HeroItem
            id={hero.id}
            superhero={hero.superhero}
            alter_ego={hero.alter_ego}
            characters={hero.characters}
            first_appearance={hero.first_appearance}
            publisher={hero.publisher}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Heros;
