var singleNumber = function(nums) {
    for (let i=0;i<nums.length;i++){
        count=0
        for (let j=0;j<nums.length;j++){
            if (nums[i]==nums[j]){
                count=count+1
            }
        }
    if (count==1){
        console.log(nums[i])
        }
    }
};
singleNumber([1,2,3,4,3,2,1,5,6])