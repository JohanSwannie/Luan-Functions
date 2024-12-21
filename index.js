let arraysTotal = 0;

const getSum = (...args) => {
  let [array, occ, totalSum] = args;
  for (let instance of array) {
    totalSum += instance;
  }
  console.log(`The total sum of array number ${occ} is ${totalSum}`);
  arraysTotal += totalSum;
  if (occ === 4) {
    console.log(`The Grand Total of all arrays is ${arraysTotal}`);
  }
};

let arrays = [
  [18, 49, 25, 71, 93, 22, 7, 13, 39],
  [14, 27, 34, 88, 44, 19],
  [23, 37, 6, 49, 81, 54, 12, 79],
  [3, 41, 17, 33, 20, 98, 71, 16],
];

let occ = 0;
let finalSum = 0;

for (let i = 0; i < arrays.length; i++) {
  occ++;
  getSum(arrays[i], occ, finalSum);
}
