import heros from '../data/heros';
import { Hero } from '../models/Hero';
import { PublisherEnum } from '../models/Publisher';

export const getHerosByPublisher = (publisher: PublisherEnum): Hero[] => {
  return heros.filter((hero) => hero.publisher === publisher);
};
