let myPromise = new Promise((resolve,reject)=>{
    document.getElementById("resBtn").addEventListener("click" ,function(){
        resolve("Button resolved!")
    })

    document.getElementById("rejBtn").addEventListener("click" ,function(){
        reject("Button rejected!")
    })
}) ;

// myPromise.then((result)=>{console.log(result)})
// .catch((err)=>{console.log(err)})



async function myFun(){
    const res = await myPromise;
    return "Tamannaah!";
}
const resolve =await myFun();
console.log( resolve);