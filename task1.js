const numbers = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
  [5, "five"],
  [6, "six"],
  [7, "seven"],
  [8, "eight"],
  [9, "nine"],
]);

const findAverageNumber = (arr) => {
  const total = arr.reduce((accumulator, currentItem) => {
    return accumulator + currentItem;
  }, 0);
  const average = total / arr.length;
  const findAvgNumInArray = arr.filter((item) => item === average);
  const result = `it contain ${numbers.get(average)} ${
    findAvgNumInArray.length
  } element`;
  return result;
};

const result1 = findAverageNumber([2, 2, 2, 2, 2]);
const result2 = findAverageNumber([1, 3, 2, 4, 5]);

console.log(result1);
console.log(result2);
