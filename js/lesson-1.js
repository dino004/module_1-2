// ЗАВДАННЯ 1
/*
const number = prompt('Введіть число')

if(Number(number) === 10) {
    alert('Вірно');
} else {
    alert('Не вірно');
}
*/


// ЗАВДАННЯ 2

/*
const min = Math.floor(Math.random() * (59 - 0) + 0);

if(min < 15) {
    alert(`${min} входить в першу чверть`);
} else if(min < 30) {
    alert(`${min} входить в другу чверть`);
} else if(min < 45) {
    alert(`${min} входить в третю чверть`);
} else {
    alert(`${min} входить в четверту чверть`);
}
*/

// ЗАВДАННЯ 3

/*
const num = prompt("Введіть число від 1 до 4");
let result;

switch (Number(num)) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "літо";
    break;
  case 4:
    result = "осінь";
    break;
  default:
    result = "Вибачте, але ви маєтеввести число від 1 до 4 включно.";
}

console.log(result);
*/

// ЗАВДАННЯ 4

/*
const value = prompt("Введіть кількість хвилин");

const hours = Math.floor(Number(value) / 60);
const minutes = Number(value) % 60;

console.log(
  `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
);

*/

// ЗАВДАННЯ 5

/*
const str = prompt("Введіть свій логін");

if (str === "Адмін") {
  const password = prompt("Введіть пароль");
  if (password === "Я головний") {
    alert("Добрий день");
  } else {
    alert("Невірний пароль");
  }
} else if (!str) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}

console.log(str);
*/

// ЗАВДАННЯ 6

/*
let counter = 0;
while (counter <= 20) {
  console.log(counter);
  counter += 1;
}
*/

// ЗАВДАННЯ 7

/*
function getNumbers(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i -= 1) {
    console.log(i);
    if (!(i % 2)) {
      sum += i;
    }
  }
  return sum;
}

console.log(getNumbers(1, 10));
*/

// ЗАВДАННЯ 8

/*
function min(a, b) {
    if(typeof a === 'number' && typeof b === 'number') {
        if(a > b) {
            return b;
        }
        return a;
    }
    return 'Not a number';
}

console.log(min(8, '4'))
*/

// ЗАВДАННЯ 9

/*
function isAbult(age) {
    if(age >= 18) {
        return true;
    } else {
        return confirm('вам точно меньше 18?')
    }
}

console.log(isAbult(6))
*/

// ЗАВДАННЯ 10

/*
function fizzBuzz(num) {
for(let i = 1; i <= num; i ++) {
    if(!(i % 3) && !(i % 5)) {
        console.log('fizzbuzz');
    } else if(!(i % 5)) {
        console.log('buzz');
    } else if(!(i % 3)) {
        console.log('fizz');
    }
}
}
fizzBuzz(15)
*/