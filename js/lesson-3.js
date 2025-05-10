// ЗАВДАННЯ 1

/*
const arr = [1, 2, 3, 4, 5];

const result = arr.map((num) => Math.pow(num, 2));

console.log(result);
*/

// ЗАВДАННЯ 2

/*
const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const newData = data.reduce((acc, arr) => {
  //   return acc.concat(arr.values);
  return [...acc, ...arr.values];
}, []);

console.log(newData);
*/

// ЗАВДАННЯ 3

/*
const people = [
  { name: "Jessica", age: 27 },
  { name: "Jenifer", age: 31 },
  { name: "Jasmine", age: 19 },
];

console.log(people.some((user) => user.age < 20));
*/

// ЗАВДАННЯ 4

/*
const numbers = [2, 4, 6, 8, 10];

console.log(numbers.every((num) => !(num % 2)));
*/

// ЗАВДАННЯ 5

/*
const numbers = [2, 6, 8, 9, 10, 12];

console.log(numbers.find((num) => num % 2));
*/

// ЗАВДАННЯ 6

/*
const numbersArray = [4, 2, 5, 1, 3];

console.log(numbersArray.sort((a, b) => a - b));
*/

// ЗАВДАННЯ 7

/*
const stringArray = ["banana", "orange", "apple", "pear"];

const result = stringArray.sort()

console.log(result);
*/

// ЗАВДАННЯ 8

/*
const users = [
  { name: "Jessica", age: 27 },
  { name: "Jenifer", age: 31 },
  { name: "Jasmine", age: 19 },
];

users.sort((a, b) => a.age - b.age);
console.log(users)
*/

// ЗАВДАННЯ 9

/*
const users = [
  { name: "Jessica", age: 27 },
  { name: "Jenifer", age: 31 },
  { name: "Jasmine", age: 19 },
];

const result = [...users].filter((user) => user.age > 20);
console.log(result);
*/

// ЗАВДАННЯ 10

/*
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => (acc += num));
console.log(sum);
*/

// ЗАВДАННЯ 11

/*
class Calc {
  constructor(param1, param2) {
    this.x = param1;
    this.y = param2;
  }

  getResult() {}
  add() {
    return this.x + this.y;
  }
  substruct() {
    return this.x - this.y;
  }
  divide() {
    return this.x / this.y;
  }
  multiply() {
    return this.x * this.y;
  }
}

const adding = new Calc(9, 3);

console.log(adding);
console.log(adding.add());
console.log(adding.substruct());
console.log(adding.divide());
console.log(adding.multiply());

console.log(adding);
*/

// ЗАВДАННЯ 12

/*
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    return (this.#login = newLogin);
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    return (this.#email = newEmail);
  }
}

const jessica =new Client(
  'jess', 'jess@gmail.com'
);

console.log(jessica);
console.log(jessica.login);
jessica.login = 'qwe';
console.log(jessica.login);
console.log(jessica.email);
jessica.email = 'fdfdf@gvc'
console.log(jessica);
*/

// ЗАВДАННЯ 13

/*
class Person {
  constructor({ name, age, gender, email }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

const jessica = new Person({
  name: "Jessica",
  age: "27",
  gender: "baba",
  email: "qwe@gmail.com",
});

class Employee extends Person {
  constructor({name, salary, departament}) {
    super({ name });
    this.salary = salary;
    this.departament = departament;
  }

  getEmployeeDetails() {
    return {
      name: this.name,
      salary: this.salary,
      departament: this.departament,
    };
  }
}

const jasmine = new Employee({
  name: 'Jasmine',
  age: "27",
  gender: "baba",
  email: "qwe@gmail.com",
  salary: 1500,
  departament: 'star',
})

console.log(jasmine.getEmployeeDetails())
*/