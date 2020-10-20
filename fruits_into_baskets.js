function fruits_into_baskets(fruits) {
    let start = 0,
        maxLength = 0,
        fruitFrequency = {};
    
    for (let end = 0; end < fruits.length; end++) {
        const rightFruit = fruits[end];
        if(!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency[rightFruit] += 1;

        while(Object.keys(fruitFrequency).length > 2) {
            const leftFruit = fruits[start];
            fruitFrequency[leftFruit] -= 1;
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit];
            }
            start += 1;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

var r = fruits_into_baskets(['A', 'B', 'C', 'A', 'C']);
console.log(r);
var r1 = fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']);
console.log(r1);