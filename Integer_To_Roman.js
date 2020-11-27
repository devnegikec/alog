// var intToRoman = function(num) {
//     var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     var chars = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
//     var sb = "";
//     for(var i=0; i< values.length; i++) {
//         while(num - values[i] >= 0) {
//             num -= values[i];
//             sb += chars[i];
//         }
        
//         if(num == 0) break;
//     }

//     return sb;
// };

const romanMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
]);

var intToRoman = function(num) {
    let romanBuilder = [];
    romanMap.forEach((value, key) => {
        let romansToAdd = Math.floor(num / key);
        if (romansToAdd >= 1) {
            const str = value.repeat(romansToAdd);
            romanBuilder.push(str);
            num -= (romansToAdd * key);
        }
    })
    return romanBuilder.join("");
};

var a = intToRoman(4960);
console.log(a);