<p align="center">
  <img src="https://raw.githubusercontent.com/tomSawkins/typed-get-prop/master/logo.jpg" />
  <p align="center">
    Strongly-typed function to get a nested & potentially null/undefined property value.
  </p>
</p>

<br />

[![npm version](https://badge.fury.io/js/typed-get-prop.svg)](https://badge.fury.io/js/typed-get-prop)
[![Build Status](https://travis-ci.org/tomSawkins/typed-get-prop.svg?branch=master)](https://travis-ci.org/tomSawkins/typed-get-prop)
[![Coverage Status](https://coveralls.io/repos/github/tomSawkins/typed-get-prop/badge.svg?branch=master)](https://coveralls.io/github/tomSawkins/typed-get-prop?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/tomSawkins/typed-get-prop.svg)](https://greenkeeper.io/)

## Install
```sh
npm install typed-get-prop --save
```

## Usage
```typescript
import { getProp } from 'typed-get-prop';

const movie: Movie = {
  title: 'The Matrix',
  year: 1999
  cast: [
    {
      name: 'Keanu Reeves',
      characters: [{
        name: 'Neo'
      }]
    },
    {
      name: 'Carrie-Anne Moss',
      characters: [{
        name: 'Trinity'
      }]
    }
  ]
};

const year = getProp(movie, 'year'); // number | undefined
const trinity = getProp(movie, 'cast', 1, 'characters', 0, 'name'); // string | undefined
```

## Why do I need this?
1. Because getting a nested property value can be **error-prone** when parent properties can be `null` or `undefined`.

    ```typescript
    const movie: Movie = {
      title: 'Fight Club',
      year: 1999
    };

    // Next line will error because `cast` is optional and undefined
    const leadActor = movie.cast[0];

    // Using getProp will simply return undefined rather than erroring
    const leadActor = getProp(movie, 'cast', 0);
    ```

2. Unlike most (if not all?) other property getter libraries on NPM, `typed-get-prop` will complain at design/compile-time if you try to access a property of a typed object that doesn't exist in the model.

    ```typescript
    const movie: Movie = {
      title: 'The Matrix',
      year: 1999
      cast: [
        {
          name: 'Keanu Reeves',
          characters: [{
            name: 'Neo'
          }]
        }
      ]
    };

    // Next line will error at design/compile-time because `actors` isn't a property on the Movie type. It should be `cast`.
    const leadActor = getProp(movie, 'actors', 0);
    ```

3. Again, unlike other property getter libraries, `typed-get-prop` will correctly infer types of properties.

    ```typescript
    const movie: Movie = {
      title: 'The Matrix',
      year: 1999
      cast: [
        {
          name: 'Keanu Reeves',
          characters: [{
            name: 'Neo'
          }]
        }
      ]
    };

    const year = getProp(movie, 'year'); // year is number | undefined at design-time
    ```

## Contributing
Got an issue or a feature request? [Log it](https://github.com/tomSawkins/typed-get-prop/issues).

[Pull-requests](https://github.com/tomSawkins/typed-get-prop/pulls) are also welcome.
