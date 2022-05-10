var jump = function(nums) {
    count=0
    for (let i=0;i<nums.length;i+=2){
        count+=1
    }
    console.log(count)
};
jump([2,3,1,1,4])