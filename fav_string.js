// var str = "3141592653589793238462643383279";
var str = "31459";
var fav = ["31", "4", "59", "13"];
// var fav = ["314", "49", "9001", "15926535897", "14", "9323", "8462643383279", "4", "793"];

var output = 3; // "314", "15926535897", "9323", "8462643383279"



function minSpaces(str, fav) {
    var minSace = -Infinity;
    var n = fav.length;
    var ans = Infinity;
    check(0)
    function check(pos) {

        var cur = "";
        if(pos == n) {
            return 0;
        }

        for(var i=pos; i<n; i++) {
            cur += str[i];
            if(fav.indexOf(cur) !== -1){
                var other = check(i+1);
                if(other != -1)
                    ans = Math.min(ans, 1+other);
            }
        }
        return ans;
    }
}
var r = minSpaces(str, fav);
console.log(r);
// var map = {};
// var dp= [];
// var vis = [];

// function check(pos) {
//     var ans = Infinity;
//     if(pos == N) {
//         return 0;
//     }
//     var cur = "";
//     ans = dp[pos];
//     if(vis[pos]) return ans;
//     vis[pos] = 1;

//     for(var i=pos; i<N; i++) {
//         cur += str[i];
//     }
//     if(fav.indexOf(cur) !== -1) {
//         map[cur] = true;
//         var other = check(i+1);
//         if(other != -1) {
//             ans = Math.min(ans, 1+other);
//         }
//     }

//     return ans;
// }