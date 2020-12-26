var zigzag = (s, rows) => {
    var output = new Array(rows).fill("");
    var row = 0;
    var down = false;
    for(var word of s) {
        output[row] += word;
        if(row == 0 || row == rows -1) {
            down = !down;
        }
        if(rows > 1) {
            if(down) {
                row += 1;
            } else {
                row -= 1;
            }
        }
    }
    return output.join("");
}

var s = "YELLOWPINK";
var rows = 4;

var r = zigzag("REDBLUEBLACK", 1);
console.log(r);
var Output= "YPEWILONLK";