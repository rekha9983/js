
function factor(num){
    sum=0
    for (let i=0;i<num;i++){
        if (num%i==0){
            sum=sum+i
        }
    }
    if (sum==num){
        console.log("perfect number hai")
    }
    else{
        console.log("perfect number nhi hai")
    }
}
factor(28)