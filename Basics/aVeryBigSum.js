/*
The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.
Output Format
Return the integer sum of the elements in the array.

Sample Input
5
1000000001 1000000002 1000000003 1000000004 1000000005
Output
5000000015
*/

function aVeryBigSum(ar) {

    let count = 0;
    for(let i =0; i < ar.length;i++){
      count = count + ar[i];
    }return count;

}
console.log(aVeryBigSum([5000000,6000000]));
