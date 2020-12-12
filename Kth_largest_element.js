const kthLargest = (arr, k) => {
    const n = arr.length;
    let left = 0;
    let right = n-1;

    while(left<=right) {
        const pivotIndex = getRandomIndex(left, right);
        const finalIndex = partition(arr, left, right, pivotIndex);
        if(finalIndex == n-k) {
            return arr[finalIndex];
        } else if(finalIndex > n-k) {
            right = finalIndex -1;
        } else {
            left = finalIndex +1;
        }
    }
    return -1;
}

const partition = (arr, left, right, pivotIndex) => {
    const pivotValue = arr[pivotIndex];
    let lesserItemsTailIndex = left;
    swap(arr, pivotIndex, right);

    for (let i = left; i < right; i++) {
        if(arr[i] < pivotValue) {
            swap(arr, i, lesserItemsTailIndex);
            lesserItemsTailIndex++;
        }
    }

    swap(arr, right, lesserItemsTailIndex);

    return lesserItemsTailIndex;
}

const swap = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}


function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
}


var result = kthLargest([3,2,1,5,6,9,4], 3);

console.log(result);