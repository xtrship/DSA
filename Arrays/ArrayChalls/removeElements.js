 function removeElement(nums, val) {
        let newArr = [];
        
        for(let i = 0; i <= nums.length - 1; i++){
            if(nums[i] !== val){
                newArr.push(nums[i]);
            }
        }
        
        return newArr.length;
    }


console.log(removeElement([1,1,2,3,4], 1));
