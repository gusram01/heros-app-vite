import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { PublisherEnum } from 'core/models/Publisher';
import { getHerosByPublisher } from 'core/services';
import HeroItem from 'features/shared/hero/HeroItem';

interface PublisherProps {
  publisher: 'dc' | 'marvel';
}

const Heros = () => {
  const { publisher } = useParams<PublisherProps>();

  const filteredHeros = useMemo(
    () => getHerosByPublisher(PublisherEnum[publisher]),
    [publisher]
  );

  return (
    <Wrap justify="center" spacing={6} align="stretch">
      {filteredHeros.map((hero) => (
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
