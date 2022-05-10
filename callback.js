// function show(a){
//     console.log("I am show function "+a)
// }
// function geeky(callback){
//     var a=101;
//     callback(a)
//     console.log(a)
// }
// geeky(show)



function show(sum){
    console.log("sum of the numbers = "+sum)
}
function sum(callback,a,b){
    // var a=10
    // var b=20;
    var sum=a+b
    callback(sum)
}
sum(show,10,20)


``