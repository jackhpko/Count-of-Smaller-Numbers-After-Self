var countSmaller = function(nums) {
    var i, bst = [], res = [], index;
    for(i = nums.length - 1; i >= 0; i--){
        index = getBSTIndex(bst, nums[i]);
        res.unshift(index); 
        bst.splice(index, 0, nums[i]);
    }
    return res;

    function getBSTIndex(bst, num){
        if(bst.length === 0) return 0;
        var start = 0, end = bst.length , middle;
        if(bst[start] >= num) return 0;
        if(bst[end] <= num) return bst.length;
        while(start < end){
            middle = (start + end) >> 1;
            if(bst[middle] >= num)
                end = middle;
            else
                start = middle + 1;
        }
        return start;
    }
};