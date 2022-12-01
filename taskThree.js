/**
 3. Find the average of largest and smallest numbers in an unsorted integer array?
Eg. 
Input Case 1:  
input: [1, 4, 3, 2]
output:  2.5
solution : average = (1+4)/2 =>5/2 => 2.5

input: [1, 4, 3, 4]
output:  3
solution : average = (1+4 +4)/3 =>9/3 => 3
 */

const averageOfTwoNumber = (arr) => {
  const largestNumber = Math.max(...arr);
  const smallestNumber = Math.min(...arr);
  const average = (largestNumber + smallestNumber) / 2;
  return average;
};

const result = averageOfTwoNumber([3, 2, 11, 5, 6]);

console.log(result);
