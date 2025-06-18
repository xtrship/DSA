removeDuplicates(nums) {
    let x = new Set(nums);      // Remove duplicates
    let y = [...x];            // Makes a new array without duplicates
    
    for(let i = 0; i < y.length; i++) {
        nums[i] = y[i];         
    }
    
    return y.length;            
}
