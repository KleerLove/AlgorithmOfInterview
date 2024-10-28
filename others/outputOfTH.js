window.name = 'a';
// 箭头函数不能作为构造函数使用（也就是不能使用 new 关键字）
const Car = (carName) => {
    this.name = carName;
    return {
        name: 'b'
    }
}
const carIns = new Car('c');
console.log(carIns.name); // Uncaught TypeError: Car is not a constructor


//在 JavaScript 中，逗号运算符会对其左侧和右侧的表达式进行求值，但最终只返回右侧表达式的结果。
// 也就是说，表达式 (inner.func, inner.func) 实际上等价于 inner.func，
// 但它还带来了一个关键的副作用：上下文中的 this 绑定丢失。
// 通常，当我们直接通过 inner.func() 调用一个对象的方法时，this 会指向 inner 对象。
// 但是使用 (inner.func, inner.func)() 的方式调用时，this 不再指向 inner 对象，而是指向全局对象
var out = 25;
inner = {
    out: 20,
    func: function(){
        var out = 30;
        return this.out;
    }
}
(inner.func, inner.func)(); // 25
inner.func(); // 20


Object.prototype.__proto__ === null; // T
Object.__proto__ === Function.prototype; // T
Object.prototype.constructor === Object; // T
// instanceof 运算符用于检查某个对象是否在其原型链上具有特定构造函数的 prototype 属性
null instanceof Object; // F 别和 typeof 搞混


    do {
        const str = ans.toString();
        for (const n of str) {
            ans += n;
        }
    } while (ans >= 10)