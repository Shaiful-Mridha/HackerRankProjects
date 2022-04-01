/*
Given a square matrix, calculate the absolute difference between
the sums of its diagonals.
1 2 3
4 5 6
9 8 9
The left-to-right diagonal = 1+5+9.
The right to left diagonal = 3+5+9.
Their absolute difference is = 15-17=2.
Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
*/

function diagonalDifference(arr) {
    // Write your code here
    let  n = arr.length;
    let sum1 = 0;
    let sum2 = 0;
  for(let i = 0; i < n; i++){
     for(let j=0; j < n; j++){

       // finding the sum of primary diagonal
         if(i === j) {
           sum1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            sum2 += arr[i][j];
         }
      }
  }
  return Math.abs(sum1 - sum2);
}
console.log(diagonalDifference([[4,5,6],[2,3,4],[3,4,-5]]));
