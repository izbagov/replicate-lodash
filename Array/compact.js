/*

EXECUTE :=> compact([0, 1, false, null, undefined, NaN, 2, "", 3])
RESULT  :=> [1, 2, 3]

*/

function compact(array) {
  return array.filter(Boolean);
}
