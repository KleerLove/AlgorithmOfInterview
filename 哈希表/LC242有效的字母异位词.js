var isAnagram = function(s, t) {
    const arr = new Array(26).fill(0);
    for(const n of s){
        arr[n.charCodeAt(0) - 97]++;
    }
    for(const m of t){
        if(arr[m.charCodeAt(0) - 97] === 0){
            return false;
        }else{
            arr[m.charCodeAt(0) - 97]--;
        }
    }
    for(const num of arr){
        if(num !== 0) return false;
    }
    return true;
};