/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

  let s = "";
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += parseInt(a.charAt(i--))
    }
    if (j >= 0) {
      sum += parseInt(b.charAt(j--))
    }

    s += sum % 2;
    carry = Math.floor(sum / 2);
  }

  if (carry) {
    s += carry;
  }

  return s.split("").reverse().join("");
};

var r = addBinaryStrings("11", "1");
console.log(r)


const addBinaryStrings = (s1, s2) => {
  var l1 = s1.length -1;
  var l2 = s2.length -1;
  
  var carry = 0;
  var str = "";

  while(l1 >=0 || l2>=0 ) {
    var sum = carry;
    
    if(l1 >=0) {
      sum += parseInt(s1[l1--]);
    }
    
    if(l2 >= 0) {
      sum += parseInt(s2[l2--]);
    }
    
    str += sum%2;
    
    carry = Math.floor(sum/2);
  }
  
  if(carry) {
    str += carry;
  }
  
  return str.split("").reverse().join("");
}