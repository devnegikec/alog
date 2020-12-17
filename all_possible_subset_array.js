var subSet = function(nums){
    const subArray = [[]];

    for(const num of nums) {
        for(const arr of [...subArray]){
            subArray.push(arr.concat(num));
        }
    }

    return subArray;
}

console.log(subSet([1,2,3]));