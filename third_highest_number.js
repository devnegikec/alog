function thirdMax(nums) {
    var m1= -Infinity, m2= -Infinity, m3= -Infinity;
    var minExists=false;
        for(var i of nums) {
            if(i== -Infinity) minExists=true ;
            if(m1==i || m2==i  || m3==i) continue;
            if(m1<i) {
                m3=m2;
                m2=m1;
                m1=i;
            } else if( m2<i) {
                m3=m2;
                m2=i;
            } else if( m3<i) {
                m3=i;
            }
        }
        
        return (m2!=m3 && (minExists || m3> -Infinity))   ? m3  : m1; 
}

console.log(thirdMax[3,2,1]);

console.log(thirdMax[3,21,3,5,1,6,9]);

var thirdMax_Second = function(nums) {
    const set = new Set(nums);
    let max = Math.max(...set);
    if (set.size < 3) return max;
    set.delete(max);
    max = Math.max(...set);
    set.delete(max);
    return Math.max(...set);
};


var thirdMax_third = function(nums) {
    let seenMaximums = [];
    
    for (let i = 0; i < 3; i++) {
        let max = null;
        for (let j = 0; j < nums.length; j++) {
            if (seenMaximums.includes(nums[j])) continue;
            max = max !== null ? Math.max(nums[j], max) : nums[j];
        }
        if (max !== null) seenMaximums.push(max);
    }    
    return seenMaximums.length < 3 ? seenMaximums[0] : seenMaximums[2];
}