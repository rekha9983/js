function showNumber(num){
        for (let i=1;i<=num;i++){
            if (i%2==0){
                console.log(i,"Even hai")
            }
            else{
                console.log(i,"Odd hai")
            }
        }
    }
    num1=require("readline-sync")
    num=num1.questionInt("enter your number")
    showNumber(num)
    