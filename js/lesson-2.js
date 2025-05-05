// ЗАВДАННЯ 1

/*
const style = ["jazz", "blues"];

style.push("rock-n-roll");

style.map((item, idx) => {
  if (item === "blues") {
    style[idx] = "classic";
  }
});

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(style);
*/

// ЗАВДАННЯ 2

/*
const logins = ["Jessica", "Jenifer", "Julia", "Jasmine"];

function checkLogin(array) {
  const name = prompt("Enter your name");
  for (let i = 0; i < array.length; i++) {
    if (name === array[i]) {
      alert(`Welcome ${array[i]}`);
      return;
    }
  }
  return alert("User not found");
}

checkLogin(logins);
*/

// ЗАВДАННЯ 3

/*
function calculateAverage(...args) {
  let sum = 0;
  args.map((item) => (sum += item));
  //   for (const item of args) {
  //     sum += item;
  //   }
  return sum / args.length;
}

console.log(calculateAverage(2, 2, 4, 4));
*/

// ЗАВДАННЯ 4

/*
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
const newArr = [];

function sumArray(array) {
  for (let i = 0, j = 1; i < array.length && j < array.length; i++, j++) {
    newArr.push(array[i] + array[j]);
  }
}

sumArray(someArr);
console.log(newArr);
*/

// ЗАВДАННЯ 5/1

/*
function findSmallesNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Sory, it is not an array!";
  } else if (!numbers.length) {
    return "Do not have a numbers";
  }
  return numbers.reduce((acc, item) => {
    return item < acc ? item : acc;
  });
}

console.log(findSmallesNumber([5, 44, 22, 21, 3]));
console.log(findSmallesNumber(4, 6, 41, 2));
console.log(findSmallesNumber([]));
*/

// ЗАВДАННЯ 5/2

/*
function findSmallesNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Sory, it is not an array!";
  } else if (!numbers.length) {
    return "Do not have a numbers";
  }
  return Math.min(...numbers);
}

console.log(findSmallesNumber([5, 44, 22, 21, 3]));
console.log(findSmallesNumber(4, 6, 41, 2));
console.log(findSmallesNumber([]));
*/

// ЗАВДАННЯ 6

/*
function findLongerstWord(string) {
  const arr = string.split(" ");
  return arr.reduce(
    (acc, word) => (word.length > acc.length ? word : acc),
    "str"
  );
}

console.log(findLongerstWord("London is the capital of Great Britain"));
*/

// ЗАВДАННЯ 7

/*
const user = {
  name: "Jessica",
  age: 32,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
*/

// ЗАВДАННЯ 8

/*
const salaries = {
  Jessica: 100,
  Jenifer: 160,
  Julia: 1470,
};

let sum = 0;

const keys = Object.keys(salaries);

keys.map((key) => (sum += salaries[key]));

console.log(sum);
*/

// ЗАВДАННЯ 9

/*
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    if (this.a !== undefined && this.b !== undefined) {
      return this.a + this.b;
    }
    return "No such properties";
  },
  mult() {
    if (this.a !== undefined && this.b !== undefined) {
      return this.a * this.b;
    }
    return "No such properties";
  },
  exist() {
    return this.a !== undefined && this.b !== undefined;
  },
};

calculator.read(2, 5);
console.log(calculator.sum());
console.log(calculator.mult());
console.log(calculator.exist());
console.log(calculator);
*/

// ЗАВДАННЯ 10

const fruits = [
  { name: "Apple", price: 45, quantity: 7 },
  { name: "Orange", price: 60, quantity: 4 },
  { name: "Banana", price: 125, quantity: 8 },
  { name: "Pear", price: 350, quantity: 2 },
  { name: "Grape", price: 440, quantity: 3 },
  { name: "Banana", price: 125, quantity: 3 },
];

function calcTotalPrice(array, fruitName) {
  return array.reduce((total, { name, price, quantity }) => {
    return name === fruitName ? total + price * quantity : total
  }, 0)
 
  // let total = 0;
  // array.map(({name, price, quantity}) => {

  //   if(name === fruitName) {
  //    total += price * quantity;
  //   }
  // })
  // return total;
}

console.log(calcTotalPrice(fruits, "Banana"));
