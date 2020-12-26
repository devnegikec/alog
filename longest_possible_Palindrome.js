const longestPalindrome = (s) => {
    let matchings = 0;
    const unmatchedCharacters = new Set()
  
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
  
      if (unmatchedCharacters.has(c)) {
        unmatchedCharacters.delete(c);
        matchings++;
      } else {
        unmatchedCharacters.add(c);
      }
    }
  
    let longestPalindromeLength = matchings * 2;
    if (!(unmatchedCharacters.size == 0)) {
      longestPalindromeLength++; // place 1 unmatched odd character in the middle
    }
  
    return longestPalindromeLength;
  }



var r = longestPalindrome("abbcccd");
console.log(r); // result 5