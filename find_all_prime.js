var enumeratePrimes = (n) => {
    if(n<= 1) {
      return [];
    }
    
    const output = [];
    const prime = new Array(n).fill(true);
    
    prime[0] = false;
    prime[1] = false;
    
    for(var i=2; i< n; i++) {
      if(prime[i]) {
        for(var j = i+ i; j<n; j += i) {
          prime[j] = false
        }
        output.push(i);
      }
      
    }
    
    return output;
  }
  
  
  var r = enumeratePrimes(15);
  
  console.log(r);