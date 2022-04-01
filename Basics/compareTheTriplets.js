/*
The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]),
and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0],
a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.

The return array is [1, 1] with Alice's score first and Bob's second.
*/
function compareTriplets(a,b){
  let score = [0,0];

  for(let i =0; i < a.length;i++){
    if(a[i]>b[i]){
       score[0]++;
    }else if(a[i] < b[i]){
       score[1]++;
    }else{
      continue;
    }
  }return score;
}
console.log(compareTriplets([5,6,9],[3,6,10]));

/*
for(let i =0; i < a.length;i++)
a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
return score;

one more way to solve

let resultA = 0;
let resultB = 0;
for(let i = 0; i < a.length;i++){
if(a[i] > b[i]){
resultA++;
}
else if(a[i] < b[i]){
resultB++;
}
}
return[resultA,resultB];

One more way to solve

a.forEach((x,index)=>{
if(x>b[index]){
resultA++;
}
else if(x <b[index]){
resultB++;
}
});
return[resultA,resultB];

*/
