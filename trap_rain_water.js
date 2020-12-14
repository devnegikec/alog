var trap = function(heights) {
    var low = 0, high = heights.length -1;
    var trapped = 0, maxLeft = 0, maxRight = 0;

    while(low < high) {
        if(heights[low] <= heights[high]) {
            if(maxLeft > heights[low]) {
                trapped += maxLeft -heights[low];
            } else {
                maxLeft = heights[low]
            }
            low++;

        } else {
            if(maxRight > heights[high]){
                trapped += maxRight - heights[high];
            } else {
                maxRight = heights[high];
            }
            high--;
        }
    }
    return trapped;
}

var walles = [4,2,0,3,2,5]
var result = trap(walles);
console.log(result);