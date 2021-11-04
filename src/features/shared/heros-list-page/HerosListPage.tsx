import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { PublisherEnum } from '../../../core/models/Publisher';
import { getHerosByPublisher } from '../../../core/services';

import Heros from '../heros/Heros';

interface PublisherProps {
  publisher: 'dc' | 'marvel';
}

const HerosListPage = () => {
  const { publisher } = useParams<PublisherProps>();

  const filteredHeros = useMemo(
    () => getHerosByPublisher(PublisherEnum[publisher]),
    [publisher]
  );

  return <Heros herosList={filteredHeros} />;
};

export default HerosListPage;
