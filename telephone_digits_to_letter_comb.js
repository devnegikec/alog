var letterCombinations = function(digits) {
    let res = [];
    const buttons = {
        2:["a","b","c"],
        3:["d","e","f"],
        4:["g","h","i"],
        5:["j","k","l"],
        6:["m","n","o"],
        7:["p","q","r","s"],
        8:["t","u","v"],
        9:["w","x","y","z"],
    }
    const combo = (order, state) => {
        if(!order) {
            return res.push(state);
        } else {
            const num = Number(order.charAt(0));
            const sub = order.substring(1);
            for (let c of buttons[num]) {
                combo(sub, state + c);
            }
        }
        
    }
    if(digits)
        combo(digits,"");
    return res;
}

var r = letterCombinations('23');
console.log(r);
