var minWindow = function(s, t) {
    var temp = {};
    for(var i=0; i< t.length; i++) {
        var cur = t[i];
        temp[cur] = -1;
    }

    var window = s.length;
    var count = 0;
    var dub = t.split('');

    for(var i=0; i<s.length; i++) {
        var cur = s[i];

        if(cur in temp) {
            temp[cur] = i;
            var index = dub.indexOf(cur);
            if(index !== -1) {
                dub.splice(index,1);
            }
        }

        if(dub.length == 0) {
            window = Math.min((i))
        }
    }
    
};


 var s = "ADOBECODEBANC", t = "ABC";