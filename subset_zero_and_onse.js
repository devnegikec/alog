const findMaxForm = function(strs, m, n) {
    const memo = [];
    for (let i = 0; i < m + 1; i += 1) {
        memo.push([]);
        for (let j = 0; j < n + 1; j += 1) {
            memo[i].push(0);
        }
    }
    for (let s of strs) {
        const o = s.replace(/0/g, "").length;
        const z = s.length - o;
        for (let i = m; i >= z; i -= 1) {
            for (let j = n; j >= o; j -= 1) {
                const t = memo[i - z][j - o] + 1;
                if (t > memo[i][j]) {
                    memo[i][j] = t
                }
            }
        }
    }
    return memo[m][n]
}

var result = findMaxForm(["10","0001","111001","1","0"], 5, 3)
console.log(result);