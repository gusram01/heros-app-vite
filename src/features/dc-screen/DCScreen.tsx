import { PublisherEnum } from 'core/models/Publisher';

import Heros from 'features/shared/heros/Heros';

const DCScreen = () => {
  return (
    <div>
      <Heros publisher={PublisherEnum.dc} />
    </div>
  );
};

export default DCScreen;
