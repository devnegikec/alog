function fibonacci(n) {
    var cache = new Array(n+1).fill(0);

    return fibWithCache(n, cache);
}
function fibWithCache(n, cache) {
    if(n == 0) {
        return 0;
    } else if(n == 1) {
        return 1;
    }

    if(cache[n] == 0) {
        cache[n] = fibWithCache(n-1, cache) + fibWithCache(n-2, cache);
    }
    return cache[n];
}


var r = fibonacci(7);
console.log(r);


const memoFib = function() {
    let memo = {}
    return function fib(n) {
      if (n in memo) { return memo[n] )
      else { 
        if (n <= 1) { memo[n] = n } 
        else { memo[n] = fib(n - 1) + fib(n - 2) } 
        return memo[n]
      }
    }
   }