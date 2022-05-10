var removeElement = function(nums, val) {
    var list=[]
    const num=val
    for (let i=0; i<nums.length;i++){
        if (nums[i]!=num){
            list.push(nums[i])
        }
    }
    console.log(list)
};
removeElement([1,2,3,4,2,4,3,4,5],2)