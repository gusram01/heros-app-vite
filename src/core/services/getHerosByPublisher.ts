import heroes from 'core/data/heroes';
import { Hero } from 'core/models/Hero';
import { PublisherEnum } from 'core/models/Publisher';

export const getHerosByPublisher = (publisher: PublisherEnum): Hero[] => {
  return heroes.filter((hero) => hero.publisher === publisher);
};
