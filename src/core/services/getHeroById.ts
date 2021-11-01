import heroes from 'core/data/heroes';
import { Hero } from 'core/models/Hero';

export const getHeroById = (id: string): Hero | undefined =>
  heroes.find((hero) => hero.id === id);
