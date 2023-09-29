// const person = {
//     name : 'John',
//     age : 23,
//     gender : 'male',

//     introduce : function (){
//         return console.log(`my name ${this.name}. Im ${this.age} years and gender ${this.gender}`);
//     },
//     changeName: function(name){
//         return console.log(`my name ${name}. Im ${this.age} years and gender ${this.gender}`);
//     }
// }

// person.introduce()
// person.changeName('Sergey')


// const animal = {
//     name : 'Dick',
//     eat(){
//         console.log(this.name +  ' eat!');
//     }
// }
// const dog = {
//     name: 'Dog',
//     bark(){
//         console.log('Bark!!');
//     }

// }
// dog.eat = animal.eat
// dog.eat()

// const obj = {
//     a : 5,
//     b : 3,
// }

// function add(){
//   return  this.a + this.b
// }

// console.log(add.call(obj))
// console.log(add.bind(obj)());


// class Person {
//     name = '';
//     age = 0;
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce () {
//         console.log(` my name ${this.name} and me ${this.age} years`);
//     }
// }

// const person = new Person('Sergey', 25)
// person.introduce()

class BankAccount {
    static BankName = 'Gbank'
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance
    }
    deposit(count){
        this.balance += count
    }
    widthdraw(count){
       return this.balance  < count ? 'Error' : this.balance -= count

    }
    printbalance(){
        console.log(` account : ${this.accountNumber} ; balance : ${this.balance}`);
    }
}

const acc1 = new BankAccount('12456', 5000)
acc1.printbalance()
acc1.widthdraw(1000)
acc1.printbalance()
