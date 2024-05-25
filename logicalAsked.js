//  29/12/2023 makeStories ==> Pratik
// let arr = "Execute the string";
// let count = {};
// for (const element of arr) {
//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// }
// console.log(count);

// 9/01/2024 codebuddy ==> Ayushmaan
// function result(...arrays) {
//     let flattenedArray = arrays.flat();
//     let uniqueArray = [...new Set(flattenedArray)];
//     let counts = {};
//     for (let num of flattenedArray) {
//       counts[num] = (counts[num] || 0) + 1;
//     }
//     let resultArray = uniqueArray.filter(num => counts[num] === 1);
//     return resultArray;
//   }
//   console.log(result([1, 2], [2, 3, 4], [3, 4, 5])); // Output: [1, 5]

// const a ={
//   name : 'Rahul'
// }
// const b = a ;
// b.name = "Anjali" ;
// console.log(a.name , b.name);       // Anjali , Anjali

// function findUnique(...arr) {
//   let flat = arr.flat();
//   let newFlat = [...new Set(flat)];
//   let counts = {};
//   for (const num of flat) {
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   let res = newFlat.filter((num) => counts[num] === 1);
//   return res;
// }
// console.log(findUnique([1, 2], [2, 3, 4], [3, 4, 5]));

// function isPalindrome(string){
//   for(let i=0;i<string.length/2;i++){
//     if(string[i]!==string[string.length-1-i]){
//       return `${string} is not a palindrome`
//     }

//   }
//   return `${string} is a palindrome`
// }
// console.log(isPalindrome('level'));

// 12 apr 2024 =>Ellicium solutions

//  let str = 'abcd' ;  //output ABbCccDddd

// function convertStr(str){
//   let res = '' ;
//   for(let i=0;i<str.length;i++){
//     res += str[i].toUpperCase() ;
//     for(let j=0;j<i;j++){
//       res  += str[i].toLowerCase()
//     }
//   }
//   return res
// }
// console.log(convertStr("abcd"));

// 23 may 2024 => IDEAQU ;
// 1.counts char of str
//2. remove duplicate elements
let arr = [1, 2, 4, 1, 2, 5, 6];
let result = [];
for (let i = 0; i < arr.length; i++) {
  let isDiplicate = false;
  for (let j = 0; j < result.length; j++) {
    if (arr[i] === result[j]) {
      isDiplicate = true;
    }
  }
  if (!isDiplicate) {
    result.push(arr[i]);
  }
}
console.log(result);

// 3. flat the arr without using loop
// 4.swap the variable without using third variable
// 5.second largest number from an array

// function secondLargest(arr){
//   let result = [...new Set(arr)].sort((a,b)=>a-b) ;
//   return result[result.length-2]
// }
// console.log(secondLargest([10,20,30,40]));

// function tableOfTen(num = 1, result = '') {
//   if (num > 10) {
//       console.log(result.trim());
//       return;
//   }
//   result += `10 x ${num} = ${10 * num}\n`;
//   tableOfTen(num + 1, result);
// }

// tableOfTen();

// function tableOfTen() {
//   Array.from({ length: 10 }, (_, i) => i + 1).forEach(num => {
//       console.log(`10 x ${num} = ${10 * num}`);
//   });
// }

// tableOfTen();
