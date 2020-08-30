/*

EXECUTE :=> chuck(["a", "b", "c", "d"], 4)
RESULT  :=> [ [ 'a', 'b', 'c', 'd' ] ]


EXECUTE :=> chuck(["a", "b", "c", "d"], 2));
RESULT  :=> [ [ 'a', 'b' ], [ 'c', 'd' ] ]

*/

function chuck(array, size = 1) {
  const arr = Array.prototype.slice.call(array); // or Array.from(array) ES2015 or [...array] too work
  const result = [];
  const len = arr.length / size;

  for (let i = 0; i < len; i++) {
    const newItems = arr.splice(0, size);
    result.push(newItems);
  }

  return result;
}

module.exports = chuck;
