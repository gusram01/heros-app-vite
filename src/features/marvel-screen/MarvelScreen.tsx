import { PublisherEnum } from 'core/models/Publisher';

import Heros from 'features/shared/heros/Heros';

const MarvelScreen = () => {
  return (
    <div>
      <Heros publisher={PublisherEnum.marvel} />
    </div>
  );
};

export default MarvelScreen;
