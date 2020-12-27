function countSubArrays(arr, k) {
    const table = {0: 1};
    let sum = 0;
    let count  = 0;

    for(let element of arr) {
        sum += element;

        if((sum - k) in table) {
            count += table[sum - k];
        }

        table[sum] = (table[sum] || 0) + 1;

    }

    return count;
}

var r = countSubArrays([1,1,1], 2);

console.log(r);