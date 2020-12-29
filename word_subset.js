const wordSubset = (A, B) => {
    const bCount = Array(26).fill(0);

    for(let word of B) {
        const tempCount = count(word);

        for(let j =0 ; j< 26; j++) {
            bCount[j] = Math.max(bCount[j], tempCount[j]);
        }
    }

    const output = [];
    for (let word of A) {
        const tempCount = count(word);

        let universal = true;
        for (let j = 0; j< 26; j++) {
            if(tempCount[j] < bCount[j]) {
                universal = false;
            }
        }
    }

    if(universal) {
        output.push(word);
    }

    return output;
}

function count(word) {
    const output = new Array(26).fill(0);

    for(let i =0; i< word.length; i++) {
        const letter =word[i];
        const idx = letter.charCodeAt(0) - "a".charCodeAt(0);
        output[idx] += 1;
    }
    return output;
}