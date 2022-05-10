
function checknumberlist(list1,list2){
    for (let i=0;i<list1.length;i++){
        if (list1[i]%2==0 && list2[i]%2==0){
            console.log("both are even")
        }
        else{
            console.log("both are not even")
        }
    }
}
checknumberlist([1,2,3,4,5],[6,8,7,2,4])