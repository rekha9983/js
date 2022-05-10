var maxSubArray = function(nums) {
    sum=0
   for (let i=0;i<nums.length;i++){
       sum=sum+nums[i]
   }
   console.log(sum)
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])