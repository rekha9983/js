
function sum1(a,b,c){
    sum=0
    sum=a+b+c
    avarege=sum/3
    console.log(sum)
    console.log(avarege)
}
input=require("readline-sync")
a=input.questionInt("enter your first number")
b=input.questionInt("enter your second number")
c=input.questionInt("enter your third number")
sum1(a,b,c)