
function user(age){
    if (age>=18){
        console.log("eligible hai")
    }
    else{
        console.log("elligible nhi hai")
    }
}
age1=require("readline-sync")
age=age1.question("enter your age")
user(age)
