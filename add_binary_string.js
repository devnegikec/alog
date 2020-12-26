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