const testObject = {
 name: 'hamid',
 lastName: 'akbari',
 age: 26,
};

const copy = testObject;

console.log(testObject === copy);

const testFn = () => {
 const name = 'hamid';
 return name;
};

const copyTestFn = () => {
 const name = 'hamid';
 return name;
};

console.log(testFn === copyTestFn);

// ? so the point is react uses this strict equality for dependecy arrays and such things.
// ? so it is better to use useCallBack and useMemo when ever the refference equality is good and heavy expensive calculations.
