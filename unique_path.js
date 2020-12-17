var uniquePaths = function(m, n) {
    var d = new Array(m).fill(new Array(n).fill(1));
   for(var row = 1; row < m; ++row) {
       for(var col =1; col< n; ++col) {
           d[row][col] = d[row -1][col] + d[row][col-1];
       }
   }
   
   return d[m-1][n-1];
};


console.log(uniquePaths(3,7));