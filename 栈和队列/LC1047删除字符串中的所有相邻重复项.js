var removeDuplicates = function(s) {
    const stack = [];
    for(const n of s){
        if(n !== stack[stack.length - 1]){
            stack.push(n);
        }else{
            stack.pop();
        }
    }
    return stack.join('');
};