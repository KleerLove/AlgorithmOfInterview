// setTimeout 内部的 console.log(i++) 会在 1 秒后执行，但由于 setTimeout 是异步的，所有的回调函数都会在循环结束后才开始执行。
// 因为 i 是一个全局作用域的变量，循环结束后 i 的值已经是 5，因此每个 setTimeout 回调中的 console.log(i++) 都会输出相同的值 5
for (i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i++) // 5 5 5 5 5
    }, 1000);
}

// 使用 let 关键字可以为每次循环创建一个新的块级作用域，使 i 在每次迭代中都是一个独立的局部变量。
for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i); // 1 2 3 4 5
    }, i * 1000);
}

// 如果使用 var 声明变量，可以通过立即执行函数表达式（IIFE）来为每次循环创建一个独立作用域，并传递当前 i 的值
for (var i = 1; i <= 5; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, j * 1000);
    })(i);
}
