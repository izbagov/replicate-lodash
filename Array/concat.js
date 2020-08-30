/**
 * EXECUTE : => concat([1], 2, [3], [[4]])
 * RESULT  : => [ 1, 2, 3, [ 4 ] ]
 */

function concat(array, ...values) {
  return values.reduce((acc, item) => {
    return acc.concat(item);
  }, array);
}

module.exports = concat;
