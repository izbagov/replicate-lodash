const { testArray } = require("../data");

function chuck(array, size = 1) {
  const result = [];
  const len = array.length / size;

  for (let i = 0; i < len; i++) {
    const newItems = array.splice(0, size);
    result.push(newItems);
  }

  return result;
}

console.log(chuck([...testArray], 4));
console.log(chuck([...testArray], 2));
