// async await
function fn2() {
    console.log(1);
}
async function fn1() {
    console.log(2);
    await fn2();
    console.log(3);
}
fn1();

// 相当于
function fn2() {
    console.log(1);
}
function fn1() {
    console.log(2);
    return new Promise((resolve) => {
        fn2();
        resolve();
    }).then(() => {
        console.log(3);
    });
}
fn1();