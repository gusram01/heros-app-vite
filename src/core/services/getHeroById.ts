import heros from 'core/data/heros';
import { Hero } from 'core/models/Hero';

export const getHeroById = (id: string): Hero | undefined =>
  heros.find((hero) => hero.id === id);
