// https://leetcode.com/problems/frog-jump/discuss/870671/No-extra-DP-matrix-and-Memo-to-solve-it-beat-100-Recursion-and-Iteration

/**
 * 
 * One reason for no extra DP matrix or memo in this task is
final goal of this task is finding out whether there's a way from start to the end,
not checking all search space of all steps(levels) are valid or not.
If one step is valid, based on this step, next step is also valid until the end. That's all.
In other words, we don't need to check every k-1, k, k+1, or every index(stones) can be arrived.

Another reason is
there's rarely a duplicate case during search,
so you will find out using seen, visited, memo, DP or Lru_cache or something
recording any previous path or state in this task is almost no help.
If you don't believe, you can remove them.
We also can get the answer and become faster.

And they can slow down performance.
Therefore, we don't need store any failed route or visited step in every index
because dumping it is easy. It's possible that we arrive the end but don't need to pass by some indexes.

I was thinking about the reasons in some time.
I suppose that's because the constraint of this task is very strict and the search space is quite narrow.
If broadening the range to k-2, k-1, k, k+1 and k+2 or moving backwards, DP is useful.

In short,
the key point is checking whether any jump can arrive any possible forward position(index) .
 */

var canCross = function(stones) {
    function recurse(i, k) {
        const last = stones[i];
        for (let j = i - 1; j >= 0; j--) {
            const dst = last - stones[j];
            if (dst > j + 1) return false;
            if (k) {
                if (dst > k + 1) return false;
                if (dst < k - 1) continue;
            }
            if (recurse(j, dst))
                return true;
        }
        return true;
    }
    
    return recurse(stones.length - 1, 0);
};


console.log(canCross([0,1,3,5,6,8,12,17]));


var canCross_slow = function(stones) {
    var l = stones.length;
    for(var j= 3; j<l; j++) {
        if(stones[i]> stones[i-1] *2) {
            return false;
        }
    }
    
    var lastStone = stones[l-1];
    var posStack = [];
    var jumpStack = [];
    var stoneMap = {};
    
    for(var i=0; i<l; i++) {
        stoneMap[stones[i]] = i;
    }
    
    posStack.push(0)
    jumpStack.push(0);
    
    while(posStack.length !== 0) {
        var pos = posStack.pop();
        var jdist = jumpStack.pop();
        
        for(var i=jdist-1; i<= jdist+1; i++) {
            if(i<= 0) {
                continue;
            }
            var npos = pos + i;
            if(npos == lastStone) {
                return true;
            } else if(npos in stoneMap) {
                posStack.push(npos);
                jumpStack.push(i);
            }
        }
    }
    
    return false;
};