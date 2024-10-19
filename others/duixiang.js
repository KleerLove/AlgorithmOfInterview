function Animal(name) {
    this.name = name;
    this.speak = function(){
        console.log(this.name + 'speaking');
    }
}

Animal.prototype.eat = function(){
    console.log(this.name + 'eating');
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log(this.name + 'barking');
}

const dog = new Dog('Buddy', 'Golden');