import heros from 'core/data/heros';

const getHerosByQuery = (query: string) => {
  return heros.filter(
    (hero) =>
      hero.alter_ego.toLowerCase().includes(query.toLowerCase()) ||
      hero.superhero.toLowerCase().includes(query.toLowerCase())
  );
};

export { getHerosByQuery };
