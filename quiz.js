// class Animal{
//     constructor(type){
//         this.type = type
//     }
// }
// let cat = new Animal ("Cat") ;
// console.log(cat.type);         //Cat

// let numbers = [1,2,3,4] ;
// let total = 1 ;
// for(let num of numbers){
//     total *= num
// }
// console.log(total);          //24

// let m = {x:1,y:2} ;
// let n = {...m , z:3} ;
// let o = Object.keys(n).length ;
// console.log(o);             //3

// let p1 = Promise.resolve('one') ;
// let p2 = p1.then((r)=>r + ' two') ;                
// p2.then((z)=>console.log(z.length))           //7

// let s = (x,y)=>x*y ;
// let r = s(3,4) + s(2,2) ;
// console.log(r);               //16

// let x = [1,2,3] ;
// let y = x.map((x)=>x*x) ;
// console.log(x[1]**y[1]);          //16


// let fun = (cb) =>{
//     let x ='hiii' ;
//     cb(x)
// }
// fun((arg)=>console.log(arg))        //hiii


//reverse each word in sentence
// let str = "Welcome to this Javascript Guide!";
// let words = str.split(' ') ;
// let reversedWord = words.map((char)=>{
//     return char.split('').reverse().join('')
// })
// let reversedString = reversedWord.join(' ') ;
// console.log(reversedString);


//Write code to convert an array of strings to an array of the lengths of those strings
// let arr = ["the", "quick", "brown", "fox"];
// let lengths = arr.map((ele)=>{
// return ele.length
// })

// console.log(lengths);


// let a=3;
// let b=a++      
// let c=++a     
// console.log(a)      //5
// console.log(b)        //3
// console.log(c)      //5