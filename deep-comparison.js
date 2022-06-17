// ? create a function that takes two argument and checks if the values are euqal or not
// * so we have primitive values of number and string and boolean and undefined and boolean
// * so first thing we want to check is that our values are primitive or not because with primitives we can strickly compare them
// console.log(typeof 2);
// console.log(typeof '2');
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof isNaN);
// * so except the null all the types are not object
// console.log(typeof null);
// * first try primitives except null
// console.log(deepComparison(2, '2'));
// console.log(deepComparison(2, 2));
// console.log(deepComparison(2, undefined));
// console.log(deepComparison('a', undefined));
// * then we get to null
// console.log(deepComparison(null, undefined));
// console.log(deepComparison(null, null));
// console.log(deepComparison(null, 2));
// * then we get to arrays
// console.log(deepComparison([1, '2'], [1, '2']));
// console.log(deepComparison([1, '2'], [1, 2]));
// console.log(deepComparison([1, '2'], [1, [1, 2]]));
// * then obejcts
// console.log(deepComparison({ name: 'hamid' }, { name: 'hamid' }));
// console.log(deepComparison({ name: 'hamid' }, { name: 'amir' }));
// console.log(deepComparison({ name: [1, 2, 3] }, { name: [1, 2, 3] }));
// console.log(deepComparison({ name: [1, 2, 3] }, { name: [1, 2, null] }));
// console.log(
//  deepComparison({ name: [1, 2, 3] }, { name: [1, 2, null], age: 26 })
// );
function deepComparison(valueOne, valueTwo) {
 if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
  return valueOne === valueTwo;
 }
 if (typeof valueOne !== 'object' && typeof valueTwo === 'object') {
  return false;
 }
 if (valueOne === null && valueTwo === null) return true;
 if (valueOne === null || valueTwo === null) return false;
 if (valueOne === valueTwo) return true;
 if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
  if (valueOne.length !== valueTwo.length) return false;
  for (let i = 0; i < valueOne.length; i++) {
   if (!deepComparison(valueOne[i], valueTwo[i])) return false;
  }
  return true;
 }
 if (Array.isArray(valueOne) || Array.isArray(valueTwo)) {
  return false;
 }
 const valueOneKeys = Object.keys(valueOne);
 const valueTwoKeys = Object.keys(valueTwo);
 if (valueOneKeys.length !== valueTwoKeys.length) return false;
 for (let i = 0; i < valueOneKeys.length; i++) {
  if (!deepComparison(valueOneKeys[i], valueTwoKeys[i])) return false;
 }
 for (value of valueOneKeys) {
  if (!deepComparison(valueOne[value], valueTwo[value])) return false;
 }
 return true;
}
