// https://leetcode.com/problems/4sum/discuss/964732/Javascript-On2-Solution-Video-Explanation

var fourSum = function(nums, target) {
    nums.sort((a,b) => a -b);
   const length = nums.length;
   const output = [];

   if(length < 4) return [];

   for(let i = 0; i< length -3; i++) {
       // if(nums[i] > target) break;

       if(i === 0 || (nums[i] > nums[i-1])) {
           let result = target - nums[i];
           for (let j = i+1; j < length - 2; j++) {
               // if(nums[j] > result) break;

               if(j === i + 1 || nums[j] > nums[j-1]) {
                   let newTarget = result - nums[j];

                   let start = j + 1;
                   let end = length - 1;
                   
                   while(start < end ) {
                       if(nums[start] + nums[end] === newTarget) {
                           output.push([nums[i], nums[j], nums[start], nums[end]]);
                           start++;
                           end--;
                           while(start < end && nums[end + 1] === nums[end] ) end--;
                           while(start < end && nums[start-1] === nums[start]) start++;                            
                       } else if(nums[start] + nums[end] > newTarget) {
                           end--;
                       } else {
                           start++;
                       }
                   }
               }
           }
       }

      
   }
   
   return output;
   
};

var r = fourSum([7,6,4,-1,1,2], 16);
console.log(r);




var fourSum_without_sort = function(nums, target) {


	let seen = {};
	let quad = [];



	for(let i = 1; i < nums.length - 1; i++){
		for(let j = i + 1; j <nums.length; j++ ){ // we dont want to put value into seen right now 
																	// because otherwise we will have a dublicate values
																	
        
			let total = nums[i] + nums[j];
			let diff = target - total;
        
			if(diff in seen){
				seen[diff].forEach(item =>{
					quad.push([...item, nums[i], nums[j]])
				})
			}
        
    }
    
    
		for(let k = 0; k < i; k++){  // we start putting values into the seen object  
											
			let total = nums[i] + nums[k];
			if(total in seen){
				seen[total].push([nums[k], nums[i]])
			}else{
				seen[total] = [[nums[k], nums[i]]]
			}
        
		}
	}

	let newquad = quad.map(item => item.sort((a,b) => a - b))

	let set = new Set(newquad.map(item => item.join(".")));
	let arr = []
	set.forEach(item => arr.push(item.split(".")))
	return arr

};




