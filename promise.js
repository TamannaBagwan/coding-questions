// let myPromise = new Promise((resolve, reject) => {
//     let num = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
//     if (num > 50) {
//       resolve(`resolved with value ${num}`);
//     } else {
//       reject(`rejected with value ${num}`);
//     }
//   });

//   myPromise
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


function getBread() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Got the bread')
      resolve('bread')
    }, 1000)
  })
}

function addFillings(bread){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('added filings');
      resolve(bread + ' fillings added')
    },1000)
  })
}

function serve(sandwich){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('sandwich is ready to eat!');
      resolve(sandwich)
    },1000)
  })
}

getBread()
.then(addFillings)
.then(serve)
.then((result)=>console.log(`enjoy your ${result}`))
.catch((err)=>console.log('something wrong',err))