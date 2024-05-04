// 1.remove duplicate elements
// function removeDuplicate(arr){
//     let newArr = [] ;
//     for(let i=0;i<arr.length;i++){
//         if(newArr.indexOf(arr[i])===-1){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(removeDuplicate([1,1,1,2,3,4,4]));       // [ 1, 2, 3, 4 ]

//second way==>
// let arr = [1,2,3,1,2,2];
// console.log([...new Set(arr)]);                  // [ 1, 2, 3 ]

// #third way
// let arr = [1,1,3,5,2,3];
// [ 1, 3, 5, 2 ]
// let result1 = []
// arr.filter((num)=>{
//     if(result1.indexOf(num)===-1){
//    result1.push(num)
//     }
//     return result1
// })
// console.log(result1);

// //2. checks two strings are anagram or not ==> is a word formed by rearranging the letters of another word
// function areAnagram(str1,str2){
//     //step1 : split the string into array
//     //step2 : sort the characters in each array
//     //step3 : join the splitted elements
//     const sortedStr1 = str1.split('').sort().join('') ;
//     const sortedStr2 = str2.split('').sort().join('') ;
//       return sortedStr1===sortedStr2 ? 'are anagrams' : 'not'
// }

// console.log(areAnagram('pot','top'));

// const fName = fun() ;
// let name = 'vivek' ;
// function fun(){
//     return `my name is ${name} malviya`
// }
// console.log(fName);      //error

// currying function
// const mul = (a) => (b) => (c) => a * b * c;
// console.log((mul)(1)(3)(2));          //6

// function checkValue(value) {
//     return new Promise((resolve, reject) => {
//       if (value < 5) {
//         resolve(`resolved ${value} is less than 5`);
//       } else {
//         reject(`rejected ${value} is not less than 5`);
//       }
//     });
//   }
//   let input = 1;
//   checkValue(input)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// var num = 4 ;
// function outer(){
//   var num = 2 ;
//   function inner(){
//     var num = 3 ;
//     console.log('num' , num);
//   }
//   inner()
// }
// outer()                   //num 3

// function sayHi() {
//   return (() => 0)()
// }                      //no output

// const a = {} ;
// const b = {key : 'b'} ;
// const c = {key : 'c'} ;
// a[b] = 123 ;
// a[c] = 456 ;
// console.log(a[c]);                  //456
// console.log(a);                   //{ '[object Object]': 456 }

// for(let i=0;i<5;i++){
//   setTimeout(()=>{
//     console.log(i);
//   },i*1000)
// }               //0 1 2 3 4

// for(var i=0;i<5;i++){
//   setTimeout(()=>{
//     console.log(i);
//   },i*1000)
// }                             // 5  5  5  5   5

//4.write a program to multiply two number without using multiply sign
// function mul(a,b){
//     let ans = a ;
//     for(let i=0;i<b-1;i++){
//         ans += a
//     }
//     return ans
// }
// console.log(mul(9,2));

//5. to sort an array
// const array = [20,5,15,10,25] ;
// console.log(array.sort((a,b)=>a-b));      //ascending
// console.log(array.sort((a,b)=>b-a));         //descending

// console.log('1');
// console.log('2');
// console.log('3');
// setTimeout(()=>{
//   console.log('4');
// },0)
// console.log('5');

// for(var i=0;i<3;i++)
//   {}
// console.log(i);                //3

// for(let i=0;i<3;i++)
//   {}
// console.log(i);           //ReferenceError: i is not defined


// function func(){
//   let a ='hello' ;
//   var b ;
//   console.log(a);
// }
// func() ;                            //hello
// console.log(b);                 // ReferenceError: b is not defined


// //6. generate substrings
// function generateSubstrings(str) {
//   const substrings = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       substrings.push(`[${str.slice(i,j)}]`)
//     }
//   }
//   return substrings;
// }
// console.log(generateSubstrings('dog'));
// console.log(generateSubstrings('cat'));
//           // [ '[d]', '[do]', '[dog]', '[o]', '[og]', '[g]' ]

//7 remove first 2 ele and add it at end of array
// let numbers = [11, 22, 33, 44, 55];
// let result = numbers.splice(0, 2); // Remove the first two elements (11, 22)
// numbers.push(...result);
// console.log(numbers);     //[ 33, 44, 55, 11, 22 ]


// 8.sort an array without using inbuilt methods
// function sort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j] ;
//                 arr[j] = arr[j+1] ;
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sort([40,23,2,89,24]));


//9 what will be the output
// const obj = { value: "hello" };
// function print() {
//   console.log(this.value);
// }

// let bound = print.bind(obj);
// bound();                         //hello

// const obj = {
//   value : 'hewwwwwllo' ,
//    print()  {setTimeout(function(){
//     console.log(this.value);
//   },3000)
// }
// }
// obj.print()        //undefined

// let a = [1,2,3,4,5] ;
// let b = a.find((num)=>num>3) ;       // 4
// console.log(a[b]);                 //5

// console.log(typeof typeof 6);     //string

// let a;
// console.log(a)      //undefined

// let arr1 = [2,3,4,5] ;
// let newArr = arr1.map((num)=>{
//   return num*2
// })

// console.log(newArr);

// Print Table of 10 without using for loop
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.map((num) => {
//   console.log(`${num * 10}`);
// });

//reverse word without using reverse()
// let name = 'rahul' ;
// let revName = '' ;
// for(let i=name.length-1;i>=0;i--){
//     revName += name[i]
// }
// console.log(revName);

//swap the numbers
// let a = 10;
// let b = 20 ;
// a = a+b;
// b = a-b ;
// a = a-b;
// console.log(a);

//second way
// let a = 10;
// let b = 20 ;
// [a] = [b] ;
// console.log(a);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 1, c: 2 };
// const obj3 = { c: 1, d: 2 };
// Object.assign(obj1, obj2, obj3);
// console.log(obj1);           //{ a: 1, b: 1, c: 1, d: 2 }

// const myArr = [1,2,3];
// const arrTwo = myArr.splice(0,4).slice(0,2);
// // arrTwo[0] = 9;
// console.log(arrTwo);              //[ 9, 2 ]

//25-jan-2024

// var x = null ==undefined;
// var y = null ===undefined;
// console.log(x===y);         //false

// var a = 1;
// a = a + (a+=2) ;
// console.log(a);               //4

// var x = ()=>{
//   var y = 4;
//   return  ()=>y
// }
// console.log(x()());            //4

//  var a = [1,2,3] ;
// var b = a.fill(0) ;
// console.log(b);              //[0,0,0]

// var a =true ;
// var b = "A" + (a ? "B" : "C") + "D" ;
// console.log(b);                 //ABD

// var x = [1,2,3,5] ;
// x.forEach((e)=>{
//   if(e<3 || e===5) return ;
//   console.log(e);          //3
// })

// const obj = {value : "Hello"};
// function print(){
//   console.log(this.value);
// }
// const boundPrint = print.bind(obj) ;
// boundPrint()           // Hello

// function p(x){
//   return function (y){
//     return x + y
//   }
// }
// const m = p(3) ;
// console.log(m(4)); //7

// const result = +!!"Hello" ;            //!"Hello" ==> boolean
// console.log(typeof result);       //number

// var x = 5
// console.log(x++);         //5
// console.log(x);              //6
// console.log(++x);       //7

// var user = {
//   name : 'alice' ,
//   address : {
//     city : 'newYork'
//   },
// pincode : 1802
// }
// console.log(Object.keys(user).length);    // 3 ==> name,address,pincode

// var [x,...y] = [4,2,3,1,5,10] ;
// console.log(y[x]);    // 10

// var prop = 'age' ;
// var person = {[prop] : 30};
// console.log(person.prop);     // undefined

// let m = [1,2,3,4,5] ;
// let n = m.find((num)=>num>2) ;
// console.log(m[n]);      //4

// let [a,b,c] = [1,2] ;
// console.log(c);  // undefined

// let numbers = [1,2,3,4,5] ;
// let total = 1 ;
// for(let num of numbers){
//   total += num
// }
// console.log(total);             // 16

// let m = {x:1 , y: 2} ;
// let n = {...m , z : 3} ;
// let o = Object.keys(n).length;
// console.log(o);     // 3

// let a1 = [1,2] ;
// let a2 = [3,4] ;
// let c = [...a2, ...a1] ;
// console.log(c[1]);          //4

// let m = 'Bob' ;
// let p = {n} ;
// console.log(p.n);         // n is not defined

// let n = [1,2,3,4]
// let s = n.reduce((a,x)=>a+x ,2) ;
// console.log(s);     // 12

// let p1 = Promise.resolve('one');
// let p2 = p1.then((r) => r + 'two');
// p2.then((z) => console.log(z.length))       // 6

// let x=[1,2,3] ;
// let y = x.map((x)=>x*x);     //1,4,9
// console.log(x[1]**y[1]);         // 2^4 ==> 2*2*2*2==> 16

// let func = (cb)=>{
//   let x = 'Hello' ;
//   cb(x)
// }
// func((arg)=>console.log(arg))    //Hello

// const value = 0 ;            //not equal
// if(value==='0'){
//   console.log('equal')
// }else{
//   console.log('not equal');
// }

// const[x,...y] = [1,2,3,4,5] ;
// console.log(y.length);       //4

// let x =[1,2,3] ;
// let y = x ;
// y.push(4) ;
// console.log(y.length ,x.length ); ;

// let x = 5;
// let y = x>= 6 ? 'm' :'n' ;
// console.log(y);        // n

// const pi = 3.14 ;
// console.log(parseFloat(pi));             // 3.14

// const map = new Map();
// map.set('a',1).set('b',2).set('c',3) ;
// const x= [...map.keys()]
// console.log(x.length);   //3

// let x =[1,2,3] ;
// let y =x.map((num)=>num.toString());
// let z = y.join("-") ;
// console.log(z.length);                // 1-2-3 ==>5

// let x =[1,[2,3]];
// let y = x.flat() ;          // [1,2,3]
// console.log(y[1]);     //2

// let a = 1; let b = 2; console.log(a++ + b++);   //3

// let x =[1,2,3] ;       // 2 +'2' ==> 22
// let y = x.map((num)=>num.toString()) ;
// console.log(y[1] + x[1]);

// let n = [1, 2, 3, 4, 5];
// let h = n.some ((x) => {
// return x % 2 === 0;
// });
// console.log(h);      // true

// let a = [1,2,3] ;
// let b = a.filter((num)=>num%2!==0) ;
// console.log(b.length);     //2

// let a=[1,2,3] ;              // 1,2,3
// let b = a.map((x)=>x*2) ;     //2,4,6
// console.log(b[2] + a[2]);         //9

// let x = 10 ;
// let y = '5' ;
// console.log(x + +y);      // 15

// let a = [1,2,3] ;
// let b = a.slice(0,2) ;     //last i -1
// console.log(b.length);           //2

// let str = 'hello' ;
// let result = (function(s){
//     s = 'world' ;
//     return s
// })(str)

// console.log(result);    // world

// let x = 'hello world' ;
// let y = x.split(' ') ;
// console.log(y.length);    //2

// let num = [1,2,3] ;
// num[-1] = 0;      // [ 1, 2, 3, '-1': 0 ]
// console.log(num.length);   //3

// let a = 5;
// let b = a++ ;
// let c =++a ;
// console.log(a+b+c);      // 7 + 5 + 7 = 19

// let a =[1,2,3,4,5];
// function arary(b,...a){
//     console.log(a);
// }
// arary(6,7,8,0)     // [ 7, 8, 0 ]

// let arr = [4,5,1,7,9,3] ;

// // console.log(arr.sort((a,b)=>b-a));
// let b= arr.sort().reverse() ;
// console.log(b);

//divisible by 3==>fizz and 5==>buzz otherwise ==>fizzbuzz
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz', i);
//     } else if (i % 3 === 0) {
//         console.log('fizz', i);
//     } else if (i % 5 === 0) {
//         console.log('buzz', i);
//     }
// }

// let str = 'random' ;
// let reversedStr = '';
// for(let i=str.length-1;i>=0;i--){
//     reversedStr += str[i]
// }
// console.log(reversedStr);

// function calc(x, y = 2) {
//     return x > 3 ? x + y : x * y
// }
// console.log(calc(3));

// function fibonacci(n){
//     let febSeries=[0,1] ;
//     for(let i=2;i<n;i++){
//         febSeries[i] = febSeries[i-1] + febSeries[i-2]
//     }
//     return febSeries
// }
// console.log(fibonacci(10));

// let num = parseInt(prompt('Enter a number:'));
// let a = 0;
// let b = 1;
// let nt = a + b;

// while (nt <= num) {
//     console.log(nt);
//     a = b;
//     b = nt;
//     nt = a + b;
// }

// console.log('hello'-8);       //NaN

// let arr = [1, 2, 2, 5, 6, 7, 8, 10, 1, 8];
// let duplicatedEle = arr.filter((item,i)=>arr.indexOf(item)!==i && arr.lastIndexOf(item) === i) ;
// console.log(duplicatedEle);

// let str = 'MyNameIsTamanna';
// let res = str.replace(/[A-Z]/g, " $&").trim();
// console.log(res);

// sort an array ==>
// let arr =;
// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
// return arr
// }
// console.log(bubbleSort( [8, 0, 4, 9, 2, 4, 5, 1]));

// let arr = [1,2,3] ;
// let x = arr.filter((x)=>x>=2)
// let y = x.reduce((x,y)=>x*y) ;
// console.log(y);

// const obj1 = { a: 1, b: 2 };
//       const obj2 = { b: 1, c: 2 };
//       const obj3 = { c: 1, d: 2 };

//       Object.assign(obj1, obj2, obj3);
//       console.log(obj1);       //{ a: 1, b: 1, c: 1, d: 2 }

// const myArr = [1,2,3]; //
// const arrTwo = myArr.splice(0,4).slice(0,2);
// console.log(arrTwo);              // [ 1, 2 ]
// arrTwo[0] = 9;
// console.log(arrTwo);           // [9,2]

// for(let i=10; i>0; i--){
//    console.log(i);
// }

//descending order   [ 34, 12, 6, 5, 4 ]
// function sortArr(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sortArr([4, 12, 34, 5, 6]));

// [1, 2], [2, 3, 4], [3, 4, 5]
// function removeUnique(...arr){
//     let flatArr = arr.flat() ;
//     let newFlatArr = [...new Set(flatArr)] ;
//     let counts = {};
//     for(let num of flatArr ){
//     counts[num] =(counts[num] || 0) + 1

//     }
//      let res = newFlatArr.filter(num=>counts[num]===1)
//     return res

// }
// console.log(removeUnique([1, 2], [2, 3, 4], [3, 4, 5]));

// console.log(isNaN(5));

// for(var i=0;i<=3;i++){
//     setTimeout(()=>{
// console.log(i);
//     },1000)
// }

///         0 1 2 3 4
// const res = [9,3,7,8][1,2] ;
// console.log(res)

// let x = 0 ;
// let y = x++ + --x;
// console.log(y);         // 0

// let arr = [1,2,4,1,3,4,1,2] ;
// let res = [] ;
// for(let i=0;i<arr.length;arr++){
//     if(res.indexOf(arr[i])===-1){
//         res.push(arr[i])
//     }
//     return res
// }
// console.log(res);

///even number sum
let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i=0;i<numbers.length;i++){
// if(numbers[i]%2===0){
//     sum += numbers[i]
// }
// }
// console.log(sum);

//second way
// let result = numbers.filter((num)=>num%2===0).reduce((acc,current)=>acc+current);
// console.log(result);

// function findCommon(input1, input2) {
//     let commonProps = {};
//     for (const key in input1) {
//       if (input2.hasOwnProperty(key) && input1[key] === input2[key]) {
//         commonProps[key] = input1[key];
//       }
//     }
//     return commonProps;
//   }
//   const input1 = { name: "tahura", age: 12, city: "newyork" };
//   const input2 = { city: "newyork", age: 12 };
//   console.log(findCommon(input1, input2));

// second largest
// function secondLargest(num) {
//     let arr = [...new Set(num)].sort((a, b) => a - b);
//     return arr[arr.length - 2];
//   }
//   let num = [10, 4, 12, 32, 6];
//   console.log(secondLargest(num));

// function smallestNum(arr){
//   let result=[...new Set(arr)].sort((a,b)=>b-a);
//   return result[result.length-1]
// }

// let arr = [3,2,7,32,34];
// console.log(smallestNum(arr));

//   function findPairWithSum(arr, goal) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === goal) {
//                 return [i, j];
//             }
//         }
//     }

//     return null; // If no pair is found
// }

// const arr = [1, 3, 10, 11, 14];
// const goal = 13;

// const result = findPairWithSum(arr, goal);
// if (result) {
//     console.log("Output:", result);
// } else {
//     console.log("No pair found with the given sum.");
// }

// let person = [
//   { name: "rahul", age: 20 },
//   { name: "pratik", age: 26 },
// ];

// let sum = 0;
// for (let i = 0; i < person.length; i++) {
//   sum += person[i].age;
// }
// console.log(sum);


// let products = [{name:'milk',quantity:3,price:1.5},
// ]

//it will not modified the original array as like reverse()
// const arr = ["one", "two", "three"];
// const res = arr.toReversed();
// console.log("original :" + arr);
// console.log("reversed :" + res);

// let obj = {
//     name: "rahul",
//     getName:  ()=> {
//       return this.name;
//     },
//   };
//   console.log(obj.getName()); // Output: undefined
  
// const person = {};
// Object.defineProperties(person, {
//   name: {
//     value: "rahul",
//     writable: false,     // we can modify name 
//   },
//   age: {
//     value: 23,
//     writable: false,
//   },
// });
// person.name="rohan"
// console.log(person.name);      // rahul

// const x = [];
// for (let i = 0; i < 3; i++) {
//   x.push((j) => console.log(i * j));
// }
// x[2](8); //  0 1 2=>16
 
// const arr = [1, 2, 3, 4, 5];
// const res = [];
// arr.forEach((ele) => {
//   if (ele === 3) {
//     return;
//   }
//   res.push(ele);
// });
// console.log(res);

// let x = 1+["1"] ; console.log(x); //11

// const user = {
//     id: 123,
//     name: "rahul",
//     age: 29,
//     address: {
//       city: "pune",
//       state: "mh",
//     },
//   };
  
//   Object.defineProperty(user, 'id', { writable: false });
//   user.id = 99;
//   console.log(user);


// const num = [1,2,3,4,5] ;
// let result =num.filter((n)=>{
//     if(n<3){
//         console.log(n);
//     }
// }) ;

