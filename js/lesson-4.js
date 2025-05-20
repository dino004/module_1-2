// 1 отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);

// 2 отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.log(titleEl);

// 3 отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.log(listEl);

// 4 отримай всі елементи з атрибутом data-topic i виведи їх в консоль;
const dataTopicEl = document.querySelectorAll("[data-topic]");
dataTopicEl.forEach((item) => console.log(item));

// 5 отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataTopicFirstEl = dataTopicEl[0];
console.log(dataTopicFirstEl);

// 6 отримай останній елемент з списку всіх елементів з атрибутом
// data-topic і виведи його в консоль;
const dataTopicLastEl = dataTopicEl[dataTopicEl.length - 1];
console.log(dataTopicLastEl);

// 7 який елемент є сусідом для h1? Знайти і виведи його в консоль;
const sibling = titleEl.nextElementSibling;
console.log(sibling);

// 8 по тегу h3 знайти всі заголовки та виведи їх у консоль;
const littleTitle = document.querySelectorAll("h3");
littleTitle.forEach((item) => console.log(item));

// 9 для кожного елмента һ3 додай class="active", який змінить колір заголовка на червоний колір
littleTitle.forEach((item) => item.classList.add("active"));

// const container = document.querySelector(".container");

// container.addEventListener("click", handleClick);

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liEl = document.querySelectorAll("[data-topic]");
const nav = [...liEl].find((item) => item.dataset.topic === "navigation");
console.log(nav);
// 11 додай для знайденого елемента data-topic="navigation" атрибут
// style і зроби його backgroundColor жовтим
nav.style.backgroundColor = "yellow";
// 12 у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const textEl = [...nav.children].find((el) => el.tagName === "P");
textEl.textContent = "Я змінив тут текст!";
// 13 створи const currentTopіс "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopіс = "manipulation";
const man = [...liEl].find((el) => el.dataset.topic === currentTopіс);
console.log(man);
// 14 – додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
man.style.backgroundColor = 'lightblue';
// 15 знайти в документі заголовок, який має class="completed" i виведи його в консоль;
const completed = document.querySelector('.completed');
console.log(completed);
// 16 видали елемент li в якому знаходиться заголовок, який має class="completed"
completed.parentNode.remove();
// 17 – після заголовка h1 (перед списком) додай новий елемент р і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const tilleEl = document.querySelector('h1');
const pEl = document.createElement('p');
pEl.textContent = "Об'єктна модель документа (Document Object Model)"
tilleEl.after(pEl);

// 18 додай новий елемент списку у кінець списка, його заголовок це "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та Р і готову LI закинути у кінець списку
// const newLi = document.createElement('li');

// newLi.innerHTML = "<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>";

// listEl.append(newLi)
// 19 зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const str = `<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`;
listEl.insertAdjacentHTML("beforeend", str);

// 20 очисти список

listEl.innerHTML = '';

// Завдання 2:
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// // Парні числа повинні мати зелений фон (додати клас even),
// // Непарні числа жовтий фон (додати клас odd).
// // const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// Завдання 3:
// // Form Events, Input, Focus, Blur and Submit.
// // Викоритовуй шаблон форми з файлу html.
// // 1 – При події `input`, якщо користувач ввів в поле більше
// -
// // 6 символів то додати клас`success`. Якщо ж символів менше аніж 6,
// // то клас `error
// // 2 При події focus` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid green'་
// // 3
// -
// При події blur` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid lime''
// // 4
// -
// При події submit`. Відміни поведінку браузера по змовчуванню.
// // Дістань данні з інпуту і чек боксу, зроби перевірку,
// // що інпут не порожній, також, що нажатий чек бокс у положення true,
// // якщо користувач все виконав вірно, збери данні (userName)
// // у обьект і виведи у консоль. У разі, якщо користувач не виконав
// // одну із умов, виведи повідомлення. Також реалізуй додавання
// // ім'я користувача у span, замість слова "Anonymous".
// // Якщо користувач ввів ім`я, а потім видали, зроби так,
// // щоб на місце повернулось дефолтне знаяення "Anonymous".
// // При відправці форми, очисти інпут, верни чек бокс у положення
// // false, верни дефолтне значення "Anonymous" у span.
// Завдання 4:
// // Використовуй шаблон розмітки з файлу html та напиши наступний
// функціонал:
// https://www.edu.goit.global/uk/learn/29773997/30608224/30608348/training
// 8/921.02.2025, 13:08
// ТЗ
// // при кліку на елемент меню, розкривай блок з текстом. При повторному
// кліку
// // по елементу, розкритий текст приховується. Нажимаючи на інші
// // елементи меню, попередньо відкриті елементи не закриваються.
