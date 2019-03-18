type Defined<T> = Exclude<T, undefined>;

// <generate>
declare type GetPropFunction = any;
// </generate>

/**
 * Gets a nested property value from an object, propagating any null or undefined values.
 * @param object object to inspect
 * @param keys nested property names
 */
export const getProp: GetPropFunction = (object: any, ...keys: string[]) => {
  let index = 0;

  while (object != null && index < keys.length) {
    // tslint:disable-next-line
    object = object[keys[index++]];
  }

  return index && index === keys.length ? object : undefined;
};
