var subsetsWithDup = function(nums) {
    function helper(arr, cur) {
        res.push([...cur]);
        
        for(var i =0; i< arr.length; i++) {
            if(i == 0 || arr[i] !== arr[i-1]) {
                cur.push(arr[i]);
                helper(arr.slice(i+1), cur);
                cur.pop();
            }
        }
    };
    let res = [];
    nums.sort();
    helper(nums, [])
    return res;
};
var r = subsetsWithDup([1,2,2]);
console.log(r);


var subsetsWithDup_fast = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const dfs = (nums, i, arr) => {
        if(i === nums.length) {
            res.push(arr);
            return;
        }
        dfs(nums, i+1, arr);
        let newarr = arr.concat(nums[i]);
        dfs(nums, i+1, newarr);
    };
    dfs(nums, 0, []);
    return Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
};

console.log(subsetsWithDup_fast([1,2,3]));