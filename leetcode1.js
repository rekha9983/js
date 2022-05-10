function isPalindrome(x) {
    const number1=x
    var sum=0
    var num=0
    while (x>0){
        num=x%10;
        sum=sum*10+num;
        x=parseInt(x/10)
    }
    return number1==sum
}
console.log(isPalindrome(1476741))