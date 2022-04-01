/*
Sample Input
6
1 2 3 4 10 11

Sample Output
31
*/
function simpleArraySum(ar) {

  let result = 0;
  for(let i =0; i < ar.length;i++){
    result = result + ar[i];
  }return result;
}
console.log(simpleArraySum([4,5,6]));
