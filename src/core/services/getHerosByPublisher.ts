import heros from 'core/data/heros';
import { Hero } from 'core/models/Hero';
import { PublisherEnum } from 'core/models/Publisher';

export const getHerosByPublisher = (publisher: PublisherEnum): Hero[] => {
  return heros.filter((hero) => hero.publisher === publisher);
};
