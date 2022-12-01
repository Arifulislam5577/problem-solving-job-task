/**
 Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
Ex:
Input Case 1:  
input: [2,2,2,2,2] 
output:  5
solution : 2+ 2+ 2+ 2+ 2 = 10/5 ==> 2
it contain five 2 element

Input Case 2:  
input: [ 1,3,2,4,5]  
output:  1
solution : 1+ 3+ 2+ 4+ 5 = 15/5 ==> 3
it contain one 3 element
 */

const findAverageNumber = (arr) => {
  const total = arr.reduce((accumulator, currentItem) => {
    return accumulator + currentItem;
  }, 0);
  const average = total / arr.length;
  const findAvgNumInArray = arr.filter((item) => item === average);
  const result = `it contain ${average} ${findAvgNumInArray.length} element`;
  return result;
};

const r1 = findAverageNumber([1, 3, 2, 4, 5]);
const r2 = findAverageNumber([3, 3, 3, 3, 3, 3]);
const r3 = findAverageNumber([3, 1, 5]);

console.log({ r1, r2, r3 });
