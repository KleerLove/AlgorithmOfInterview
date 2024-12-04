var canConstruct = function(ransomNote, magazine) {
    const arr = new Array(26).fill(0);
    for(const n of magazine){
        arr[n.charCodeAt(0) - 97]++;
    }
    for(const m of ransomNote){
        if(arr[m.charCodeAt(0) - 97] === 0){
            return false;
        }else{
            arr[m.charCodeAt(0) - 97]--;
        }
    }
    return true;
};