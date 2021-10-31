import { FC } from 'react';

import { Wrap, WrapItem } from '@chakra-ui/react';

import { PublisherEnum } from 'core/models/Publisher';
import { getHerosByPublisher } from 'core/services';
import Hero from 'features/shared/hero/Hero';

interface Props {
  publisher: PublisherEnum;
}

const Heros: FC<Props> = ({ publisher }) => {
  const filteredHeros = getHerosByPublisher(publisher);

  return (
    <Wrap>
      {filteredHeros.map((hero) => (
        <WrapItem key={hero.id}>
          <Hero
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
