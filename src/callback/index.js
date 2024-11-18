

function sum(sum1, sum2){
    return sum1 + sum2

}

function calc(sum1, sum2, callback){
    return callback(sum1, sum2)
}

console.log(calc(3, 6, sum))

setTimeout( function(){
console.log("Hola mi hijo")
}, 1000)

