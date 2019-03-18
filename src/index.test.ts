import { describeFunction } from 'jest-helpers';
import * as getPropModule from './index';

const { getProp } = getPropModule;

interface CastMember {
  name: string;
  characters: Array<{ name: string; }>;
}

interface Movie {
  title: string;
  year: number;
  cast: CastMember[];
}

describeFunction(getPropModule, 'getProp', () => {
  let movie: Movie;

  beforeEach(() => {
    movie = {
      title: 'The Matrix',
      year: 1999,
      cast: [
        {
          name: 'Keanu Reeves',
          characters: [{ name: 'Neo' }]
        },
        {
          name: 'Laurence Fishburne',
          characters: [{ name: 'Morpheus' }]
        },
        {
          name: 'Carrie-Anne Moss',
          characters: [{ name: 'Trinity' }]
        }
      ]
    };
  });

  it('should read a property', () => {
    expect(getProp(movie, 'title')).toEqual('The Matrix');

    expect(getProp(movie, 'year')).toEqual(1999);

    expect(getProp(movie, 'cast')).toEqual([
      {
        name: 'Keanu Reeves',
        characters: [{ name: 'Neo' }]
      },
      {
        name: 'Laurence Fishburne',
        characters: [{ name: 'Morpheus' }]
      },
      {
        name: 'Carrie-Anne Moss',
        characters: [{ name: 'Trinity' }]
      }
    ]);
  });

  it('should read a nested property', () => {
    expect(getProp(movie, 'cast', 0, 'name')).toEqual('Keanu Reeves');
  });

  it('should propagate nulls and undefined values', () => {
    expect(getProp(movie, 'cast', 999, 'name')).toEqual(undefined);
    expect(getProp(null as any as Movie, 'cast', 0, 'name')).toEqual(undefined);
  });
});
