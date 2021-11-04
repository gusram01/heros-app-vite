import heros from '../data/heros';
import { Hero } from '../models/Hero';

export const getHeroById = (id: string): Hero | undefined =>
  heros.find((hero) => hero.id === id);
