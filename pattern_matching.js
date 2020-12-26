
 
    // Function to encode given string
    function encodeString(str) {
        var map = {};
        var res = "";
        var i = 0;
 
    
        for (var j = 0; j < str.length; j++) {
            var ch = str[j];
 
            // If the character is occurring for the first
            // time, assign next unique number to that char
            if (!map[ch])
                map[ch] = i++;

            // append the number associated with current
            // character into the output string
            res += map[ch];
        }
 
        return res;
    }
 
    // Function to print all
    // the strings that match the
    // given pattern where every
    // character in the pattern is
    // uniquely mapped to a character
    // in the dictionary
    function findMatchedWords(dict, pattern) {
        var output = [];
        // len is length of the pattern
        var len = pattern.length;
 
        // encode the string
        var hash = encodeString(pattern);
 
        // for each word in the dictionary array
        for (word of dict) {
            // If size of pattern is same
            // as size of current
            // dictionary word and both
            // pattern and the word
            // has same hash, print the word
            if (word.length == len && encodeString(word) == hash){
                output.push(word);
            }   
        }
        return output;
    }
 
    var dict = ["abb", "abc", "xyz", "xyy"];
    var pattern = "foo";
    var r = findMatchedWords(dict, pattern);

    console.log(r);