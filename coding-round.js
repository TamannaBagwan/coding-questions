// let myPromise = new Promise((resolve,reject)=>{
//     document.getElementById("resBtn").addEventListener("click" ,function(){
//         resolve("Button resolved!")
//     })

//     document.getElementById("rejBtn").addEventListener("click" ,function(){
//         reject("Button rejected!")
//     })
// }) ;

// // myPromise.then((result)=>{console.log(result)})
// // .catch((err)=>{console.log(err)})


// async function myFun(){
//     const res = await myPromise;
//     return "Tamannaah!";
// }
// const resolve =await myFun();
// console.log( resolve);





const circleCoo = [] ;

function logIfIntersectingCircle (){
const firstCircle = circleCoo[0] ;
const secondCircle = circleCoo[1] ;
const x1 = firstCircle.x ;
const x2 = secondCircle.x;
const y1 = firstCircle.y ;
const y2 = secondCircle.y
}

document.addEventListener("click" ,(e)=>{
  const totalCircle = document.querySelectorAll(".circle") ;
  if(totalCircle.length===2){
 totalCircle.forEach((circ)=>{
  document.body.removeChild(circ)
 })
  }

  const x = e.clientX;
  const y = e.clientY;


  circleCoo.push({x,y});

 console.log("x" ,x , "y",y); 

 const randomNum = Math.random  ;
 const radius = '100px' ;

 const circle = document.createElement("div")
 circle.classList.add("circle") ;
circle.style.top = y-50 + 'px';
circle.style.left = x-50 + 'px';
circle.style.width = radius;
circle.style.height = radius;

 document.body.appendChild(circle) ;
 if(circleCoo.length===2){
  logIfIntersectingCircle()
 }

})

