// let myPromise = new Promise(function(myResolve, myReject) {
//     let x =require("readline-sync").questionInt("enter your number");
//   // The producing code (this may take some time)
//     if (x == "0") {
//       myResolve();
//     } else {
//       myReject();
//     }
//   });

//   myPromise.then((massage)=>{
//       console.log("okk")
//   })
//   myPromise.catch((massage)=>{
//       console.log("error")
//   })


let myPromise= new Promise(function(myResolve,myReject){
    var i=require("readline-sync").questionInt("enter your number")
        if (i%2==0){
            myResolve("Even");
        } else {
            myReject("Odd");
        }
})
myPromise.then((massage)=>{
    console.log(massage)
})
myPromise.catch((massage)=>{
    console.log(massage)
})
