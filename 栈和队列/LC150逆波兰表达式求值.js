/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0; i < tokens.length; i++){
        if(!isNaN(tokens[i])){  // 判断是否是数字
            stack.push(Number(tokens[i]));
        }else{
            let back = stack.pop();
            let front = stack.pop();
            switch(tokens[i]){
                case "+":
                    stack.push(front + back);
                    break;
                case "-":
                    stack.push(front - back);
                    break;
                case "*":
                    stack.push(front * back);
                    break;
                case "/":
                    stack.push(Math.trunc(front / back));  // Math.trunc 将数字的小数部分去掉, Math.floor 返回小于或等于一个给定数字的最大整数
                    break;
            }
        }
    }
    return stack[0]
};