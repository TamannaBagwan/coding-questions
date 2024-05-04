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
//  function convertStr(str){
//   let result = '' ;
//   for(let i=0;i<str.length;i++){
//     result += str[i].toUpperCase() ;
//     for(let j=0;j<i;j++){
//       result += str[i].toLowerCase() ;
//     }
//   }
//   return result
//  }
  
// console.log(convertStr("abcd"));