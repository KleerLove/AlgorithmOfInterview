this.name = 'hank';
function fn1(){
    console.log(this.name);
}
const fn2 = () => console.log(this.name);
fn1();
fn2();
// hank hank

function Person(){
    this.name = 'cindy';
}
Person.name = 'kitty'; // 构造函数 Person 设置一个静态属性 name，这个属性属于 Person 函数本身，而不是 Person 的实例
const person = new Person();
console.log(person.name);
// cindy