import { PublisherEnum } from './Publisher';

export interface IHero {
  id: string;
  superhero: string;
  publisher: PublisherEnum;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export class Hero {
  readonly id: string;

  readonly superhero: string;

  readonly publisher: PublisherEnum;

  readonly alter_ego: string;

  readonly first_appearance: string;

  readonly characters: string;

  constructor(hero: IHero) {
    this.id = hero.id;
    this.superhero = hero.superhero;
    this.publisher = hero.publisher;
    this.alter_ego = hero.alter_ego;
    this.first_appearance = hero.first_appearance;
    this.characters = hero.characters;
  }
}
