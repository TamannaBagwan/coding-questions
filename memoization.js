
let sum = 0;
const calc=(n)=>{
    for(let i=0 ; i<=n ; i++){
        sum += i
    }
    return sum
}

// console.log(calc(5));



const memoize=(fun)=>{
    let cache = {} ;
    return function(...args){
        let n = args[0]
        if(n in cache){
            console.log('from cache');
            return cache[n]
    }else{
        console.log('')
        let result = fun(n) ;
        cache[n] = result ;
        return `calculating first time ${result}`
    }
    }
}
console.time()
const efficient = memoize(calc) ;
console.log(efficient(5));
console.timeEnd()


console.time();
console.log(efficient(5));
console.timeEnd()

console.log(efficient(7));