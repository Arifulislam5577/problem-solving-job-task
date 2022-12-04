const averageOfTwoNumber = (arr) => {
  const largeNumber = Math.max(...arr);
  const smallNumber = Math.min(...arr);
  const allLargeNumber = arr.filter((number) => number === largeNumber);
  const allSmallNumber = arr.filter((number) => number === smallNumber);
  const allSmallAndLargeNum = [...allSmallNumber, ...allLargeNumber];
  const averageNumber =
    allSmallAndLargeNum.reduce((acc, number) => acc + number, 0) /
    allSmallAndLargeNum.length;
  return `output: ${averageNumber}`;
};

const result1 = averageOfTwoNumber([3, 2, 11, 5, 6]);
const result2 = averageOfTwoNumber([1, 4, 3, 4]);

console.log(result1);
console.log(result2);
