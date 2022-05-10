
function license_checker(speed){
    if(speed < 70){
        console.log("ok");
    }
    if(speed > 70){
        points=0
        for(var i=70;i<speed;i+=5) {
            points+=1
        }
        if(points>12){
            console.log("License suspended");
        }
        else{
            console.log(points);
        }
    }
 }
 license_checker(95);




// function bigstr(str1,str2){
//     str1len=str1.length
//     str2len=str2.length
//     if (str1len>str2len){
//         console.log(str1)
//     }
//     else{
//         console.log(str2)
//     }
// }
// bigstr("rekha","mangesh")




// function squre(num){
//     var ans={}
//     for (let i=1;i<=num;i++){
//         ans[i]=i*i
//     }
//     console.log(ans)
// }
// num1=require("readline-sync")
// num=num1.questionInt("enter your number")
// squre(num)
