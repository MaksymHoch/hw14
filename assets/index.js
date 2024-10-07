// 1

let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));

let sum = num1 + num2;

if (sum % 5 === 0) {
  alert("Сума кратна 5");
} else {
  alert("Сума не кратна 5");
}

// 2

function squareArea(side) {
  return side ** 2;
}

let side = Number(prompt("Введіть сторону квадрата:"));
alert("Площа квадрата: " + squareArea(side));

//   3

function chooseDrink() {
  let choice = prompt("1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода");

  switch (choice) {
    case "1":
      alert("Ви обрали чай");
      break;
    case "2":
      alert("Ви обрали каву");
      break;
    case "3":
      alert("Ви обрали сік");
      break;
    case "4":
      alert("Ви обрали воду");
      break;
    default:
      alert("Такого напою у нас нема");
  }
}

// Виклик функції
chooseDrink();

//   4

let purchaseAmount = Number(prompt("Введіть суму покупки:"));

let finalAmount =
  purchaseAmount > 800
    ? purchaseAmount * 0.95
    : purchaseAmount > 500
    ? purchaseAmount * 0.97
    : purchaseAmount;

alert("Остаточна сума з урахуванням знижки: " + finalAmount + " грн");

// 5

function isDivisible(a, b) {
  return a % b === 0;
}

// Приклад використання
let num10 = Number(prompt("Введіть перше число:"));
let num20 = Number(prompt("Введіть друге число:"));

alert(isDivisible(num10, num20));

// Задача з *: Знаходження коренів квадратного рівняння:

function findRoots(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    alert("Корені рівняння: " + root1 + " і " + root2);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    alert("Корінь рівняння: " + root);
  } else {
    alert("Коренів немає");
  }
}

// Виклик функції
let a = Number(prompt("Введіть a:"));
let b = Number(prompt("Введіть b:"));
let c = Number(prompt("Введіть c:"));

findRoots(a, b, c);
