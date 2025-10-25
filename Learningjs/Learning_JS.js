console.log("Hello, World");
console.log("I like coding");

// window.alert("This is an alert");

// This is how to print text, visible to the user
// document.getElementById("h11").textContent = "Hello World!";
// document.getElementById("test1").textContent = "I like coding";

// Variables!! A container that stores a value. Behaves as if it were the value it contains. AS we can see, x behaves as 100.
// 1. declaration; let x;
// 2. assignement x=100;

let x;
x = 100;
console.log(x);

let merit = 22.5;
console.log("merit");

console.log(`Your merit is ${merit} `);
// You must use the `` when dealing with variables;

console.log(typeof merit);

// let firstname = "Mihir";
// console.log(typeof firstname);

// let email = "mihirfootball7@gmail.com";
// console.log(`Your email is ${email}`);

// A boolen is a variable which is either true or false.

let passing = false;
console.log(`Your son is passing mathamatics; ${passing}`);

let pass = true;
console.log(`Your son is passing mathamatics; ${pass}`);

// let fullName = "Mihir Bhargav";
// let age = "15";
// let student = "true";

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;

// We just used variables and even printed it on the frontend where the users can see!.
// We can also use arithmetic operations

let children = 30;
// children = children ** 2;
// this is multiplication. The same way, we can achieve addition, subtraction, division(/) and even exponenets ** Here is a shortcut.

children %= 7;
// This is division and the reminder will be displayed as the answer on the console.
// This can be done with all functions.
console.log(children);

// operator precedence: Pemdas, order of operations, which the computer also follows.

// How to accept user input
// let username1;
// username1 = window.prompt("What's your username?");
// console.log(username1);
// More proffesional alternative+

let username2;
document.getElementById("mysubmit").onclick = function () {
  username2 = document.getElementById("mytext").value;
  console.log(username2);
  document.getElementById("h11").textContent = `Welcome, ${username2}!`;
};

// type conversion- we can change the datatype, strings, numbers, boolean;

// let agee = window.prompt("How old are you?");
// agee = Number(agee);
// agee = agee + 10;
// console.log(agee);

// Constants
const pi = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Give a value as a radius of a random circle");
radius = Number(radius);
circumference = 2 * pi * radius;
console.log(circumference);

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const countlabel = document.getElementById("countlabel");

let count = 0;
button1.onclick = function () {
  count++;
  countlabel.textContent = count;
};

button3.onclick = function () {
  count--;
  countlabel.textContent = count;
};

button2.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};

// There is a lot of possible math ideas and values:

console.log(Math.PI);
console.log(Math.E);
let x1 = 3.14159;
console.log(Math.round(x1));

let z1 = 10;
console.log(Math.sqrt(z1));

let z3 = 48;
console.log(Math.sin(48));

// Trignometric functions are also possible!

// This here is quite useful.

let x7 = 99;
let y7 = 100;
let z7 = 101;
let max = Math.max(x7, y7, z7);
console.log(max);

// Multiplying by 6 gives a range from 0 up to (but not including) 6.
// Math.floor() rounds down to the nearest integer (0 to 5).
// Adding 1 shifts the range to 1 to 6.

let randomnumber;

document.getElementById("btn4").onclick = function () {
  randomnumber = Math.floor(Math.random() * 6 + 1);
  console.log(randomnumber);
  displaydice.textContent = randomnumber;
};

// Pro tip. Just assign a variable, but define it in the function.
// Maybe the most important part; IF statements!!

let merits;

document.getElementById("merits3").onclick = function () {
  merits = document.getElementById("mymerits").value;
  console.log(merits);

  if (merits > 300) {
    document.getElementById("h111").textContent =
      "You have an exeptional score better than a huge percantage of all students!";
  } else if (merits <= 299 && merits >= 200) {
    document.getElementById("h111").textContent = "You have a decent score!";
  } else if (merits < 200) {
    document.getElementById("h111").textContent =
      "You are barely passing all your classes :(";
  }
};

let age9 = 15;

if (age9 == 0) {
  console.log("You were just born!");
} else if (age9 <= 18) {
  console.log("Your are a kid");
} else {
  console.log("You are an adult!");
}

let student9 = false;

if (student9) {
  console.log("You are a student");
} else {
  console.log("You are not a student.");
}

// You can also have if statements in another if statements; very useful. A little like the lego robot I programmed.
// If else is used when there are more than 2 outcomes.
// This would be very useful in the "WHat is your merits project. This is why I struggled with that one. There are several outcomes and possibilties"

const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const btn_1 = document.getElementById("btn_1");
const subresult = document.getElementById("subresult");
const payment_result = document.getElementById("payment_result");
const appay = document.getElementById("appay");

btn_1.onclick = function () {
  if (visa.checked) {
    payment_result.textContent = `You are paying with Visa`;
  } else if (mastercard.checked) {
    payment_result.textContent = `You are paying with Mastercard`;
  } else if (appay.checked) {
    payment_result.textContent = `You are paying with Apple pay`;
  } else {
    payment_result = `You must select a payment method to proceed`;
  }
};

let age10 = 22;
let message = age10 >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let isstudent = true;
let message1 = isstudent ? "You are a student" : "You are not a student";
console.log(message1);

// This is a more convinient way instead of always writing if and else.

let day = 5;
switch (day) {
  case 1:
    console.log("It is monday");
    break;

  case 2:
    console.log("It is tuesday");
    break;

  case 3:
    console.log("It is wednesday");
    break;

  case 4:
    console.log("It is thursday");
    break;

  case 5:
    console.log("It is friday");
    break;

  case 6:
    console.log("It is saturday");
    break;

  case 7:
    console.log("It is sunday");
    break;

  default:
    console.log("It is not a day");
}

// String methods

let username4 = "Mihir Bhargav";
console.log(username4.charAt(0));
console.log(username4.indexOf("r"));
console.log(username4.toUpperCase(username4));

// There is also starts with, includes and ends with.

username4 = username4.replaceAll("i", "e");

let phonenumber = "123-456-7890";
phonenumber = phonenumber.padEnd(15, "0");
console.log(phonenumber);

let username5 = "Mihir Bhargav";
let firstname5 = username5.slice(0, username5.indexOf(" "));
let lastname5 = username5.slice(username5.indexOf(" "));
// The index of helps us find specific charactcers. I have here used it to find a space and break the name into 2 parts.
console.log(firstname5);
console.log(lastname5);

// Method Chaining
// let username6 = window.prompt("Enter your Username");
// username6 = username6.trim();

// let letter = username6.charAt(0); // Changed from charAt(1) to charAt(0)
// letter = letter.toUpperCase();

// let extrachars = username6.slice(1);
// extrachars = extrachars.toLowerCase();

// username6 = letter + extrachars;
// console.log(username6);

// This has too many lines of code and is not practical.
// Instead we can use method chaining

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase.

// Logical operators

const temp = 20;
if (temp > 0 && temp <= 30) {
  console.log("The weather is good");
}
// Just as I used for the merit thing. This is the "and" logical operator. There is also the "or" || operator and not !. The not makes the true false, and the false true. In or, only one of the things need to be true.
else if (temp <= 30) {
  console.log("The weather is good");
} else {
  console.log("The weather is bad");
}

// = assignement operator
// == comparision operator (compare if values are equal)
// === strict equality operator (compare if values 7 datatype are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if (PI === 3.14) {
  console.log("That is Pi");
} else {
  console.log("That is NOT Pi");
}

// One is a string another a number but still are seen to be the same. However, if we used ===, they would not be the same.

if (!PI === 3.14) {
  console.log("That is NOT Pi");
} else {
  console.log("That is Pi");
}

// While loop = repat while some condition is true.
// username7 = "Mihir";
// while(username7 === "Mihir_0"){
//     console.log(`You didn't enter your name`);
// }

// console.log(username7)
// You can also have a do while loop which first runs the code and then checks for the while code. Also, ber careful with the while loop as we don't infinite loops.

// let loggedIn = false;
// let username11;
// let password;

// while(!loggedIn){
// username11 = window.prompt(`Enter your username`)
// password = window.prompt(`Enter your password`);

// if(username11 === "Mihir" && password === "12345"){
// loggedIn = true;
// console.log("You are logged in!");
// }

// else{
//     console.log("Wrong username or password. Please try again.")
// }
// }

// For loop/ a loop for a fixed amount of time

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("Happy new day: The time is 1:29 :)");

// NUMBER GUESSING GAME!
// const minnum = 1;
// const maxnum = 100;
// const answer = Math.floor(Math.random() * (maxnum - minnum + 1));
// console.log(answer);

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = window.prompt(`Guess a number between 1-100. `);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number");
//   } else if (guess < minnum || guess > maxnum) {
//     window.alert("Please enter a valid number");
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert("Too Low!!!");
//     } else if (guess > answer) {
//       window.alert("Too High!");
//     }
//   }
//   running = false;
// }

// let age19 = 30;

// if (age19 >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a kid!");
// }

// Learning Functions- A sectiond of reuasable code that performs a specific task. Call the function to execute it. Functions can take inputs, called parameters, and return outputs.

function happybirthday(username_mihir, age00) {
  console.log("Happy Birthday to you!");
  console.log(`Happy Birthday ${username_mihir}!`);
  console.log("Happy Birthday to you!");
  console.log(`You are ${age00} years old!`);
}

// Just this wont print anything. We need to call the function to execute it.
happybirthday("Mihir Bhargav", 15);

let x3 = 10;
let y3 = 20;
function add(x3, y3) {
  let result = x3 + y3;
  return result;
}

console.log(add(x3, y3));

// This is a function that adds 2 numbers and returns the result. We can also use it to add more than 2 numbers, but we need to change the code a bit.

let number = 10;

function ifeven(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

ifeven(number);

// let email = window.prompt("Enter your email address");

// function isvalidemail(email) {
//   if (email.includes("@") && email.includes("gmail.com")) {
//     console.log(`${email} is a valid email address.`);
//     document.getElementById(
//       "email-result"
//     ).textContent = `${email} is a valid email address.`;
//   } else if (email.includes("@hotmail.com")) {
//     console.log(`${email} is not accepted. Please use a Gmail address.`);
//     document.getElementById(
//       "email-result"
//     ).textContent = `${email}  is not accepted. Please use a Gmail address.`;
//   } else {
//     console.log("Invalid email address");
//     document.getElementById(
//       "email-result"
//     ).textContent = `${email} is a invalid email address.`;
//   }
// }

// isvalidemail(email);

// You can use the same variable several times as long as they are locally defined within the function. This is called local scope. If you define a variable outside the function, it is called global scope and can be accessed anywhere in the code. In large programs, use local scope to avoid conflicts and bugs.

// .value is very useful. It is used to get the value of an input field in HTML. You can use it to get the value of a text input, checkbox, radio button, etc.

// An array = a variable like structure that can hold multiple values. It is a list of items, like a shopping list or a list of names. You can access each item in the array using its index, which starts at 0.

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // Adds an item to the end of the array
fruits.unshift("mango"); // Adds an item to the beginning of the array
fruits.sort(); // Sorts the array in alphabetical order
fruits.pop(); // Removes the last item from the array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);

let Numbers = [1, 2, 3, 4, 5];
let min = Math.min(...Numbers); // Spread operator to find the minimum value
let max1 = Math.max(...Numbers); // Spread operator to find the maximum value
console.log(min);
console.log(max1);
// spread operator (...) is used to expand an array into individual elements. It can be used to pass an array as arguments to a function, or to create a new array from an existing one.

// rest operator (...) is used to collect multiple arguments into an array. It can be used to create a function that accepts a variable number of arguments, or to create an array from a list of values. It is the opposite of the spread operator.

function openFridge(...foods) {
  console.log(foods);
}
const food1 = "pizza";
const food2 = "Burger";
const food3 = "Cheesecake";
const food4 = "Cookie";
const foods = [food1, food2, food3, food4];

openFridge(food1, food2, food3, food4); // This will print all the foods in an array
console.log(foods); // This will print the foods array

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number; // Adds each number to the total
  }
  return total; // Returns the total sum
}

console.log(sum(1, 100, 99, 98, 97)); // This will print the sum of all the numbers passed as arguments

function average(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number; // Adds each number to the total
  }
  return total / numbers.length; // Returns the average of the numbers
}

console.log(average(1, 2, 3, 4, 5)); // This will print the average of all the numbers passed as arguments
// rest perameters can also be used for bundle a set of strings using a function like done for the 2 others above.

// Temperature project

document.getElementById("btn_temp").onclick = function () {
  let temperature = Number(document.getElementById("input_temp1").value);

  if (celtofar.checked) {
    let fahrenheit = (9 / 5) * temperature + 32;
    document.getElementById(
      `result_temp`
    ).textContent = `The temperature in Fahrenheit is ${fahrenheit.toFixed(
      1
    )}°F`;
    console.log(fahrenheit);
  } else if (fartocel.checked) {
    let celsius = (temperature - 32) * (5 / 9);
    document.getElementById(
      `result_temp`
    ).textContent = `The temperature in Celsius is ${celsius.toFixed(1)}°C`;
    console.log(celsius);
  } else {
    document.getElementById(
      `result_temp`
    ).textContent = `Please select a conversion option!`;
  }
};

// random password generator:
function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  console.log(`Allowed characters: ${allowedChars}`);

  if (passwordLength <= 0) {
    return "Password length must be greater than 0.";
  }

  if (allowedChars.length === 0) {
    return "At least one character type must be selected.";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 10;
const includeLowerCase = true;
// When any one of these are false, they aren't disaplyed.
const includeUpperCase = false;
const includeNumbers = true;
const includeSymbols = true;

generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);
console.log(
  `Generated password: ${generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  )}`
);

// callback = a function that is passed as an argument to another function and is executed after the completion of that function. It allows you to run code after a certain task is done, like waiting for a response from a server or completing a calculation. Do this only after you have done that for example.

hello(goodbye);

function goodbye() {
  console.log(`Goodbye, World!`);
}

function hello(callback) {
  console.log("Hello, World!");
  callback(); // Call the callback function
}

//   sum(displayresult, 5, 10); // Call the sum function with displayresult as the callback and 5 and 10 as the arguments

// function sum(callback, a, b) {
//   const result = a + b;
//   callback(result); // Call the callback function with the result
// }

// function displayresult(result){
//   console.log(`The sum is: ${result}`);
// }

// forEach = method used to iterate over the elements of an array and perform a specific action on each element. It takes a callback function as an argument, which is executed for each element in the array.

let numbers = [1, 2, 3, 4, 5];

numbers = numbers.map(square); // Now it correctly calls the squaring function
numbers.forEach(display);

function square(element) {
  return element * element;
}

function display(element) {
  console.log(element);
}

// map = method used to create a new array by applying a function to each element of the original array. It returns a new array with the results of calling the provided function on every element in the array.

const number111 = [1, 2, 3, 4, 5];
const squares = number111.map(square); // Now it correctly calls the squaring function
console.log(squares);
function square(element) {
  return Math.pow(element, 2); // Square each element
}

const students = ["Student1", "Student2", "Student3"];
const studentsUpperCase = students.map(upperCase); // Convert each student's name to uppercase
console.log(studentsUpperCase); // Output the new array with uppercase names

function upperCase(element) {
  return element.toUpperCase(); // Convert each element to uppercase
}

const dates = ["2023-10-01", "2023-10-02", "2023-10-03"];

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

console.log(dates.map(formatDates)); // Output the formatted dates

let numbers0 = [1, 2, 3, 4, 5, 6];
let evenums = numbers0.filter(isEven); // Filter the array to get only even numbers
let oddnums = numbers0.filter((element) => element % 2 !== 0); // Filter the array to get only odd numbers

console.log(evenums); // Output the new array with even numbers
console.log(oddnums); // Output the new array with odd numbers

function isEven(element) {
  return element % 2 === 0; // Check if the element is even
}

function isOdd(element) {
  return element % 2 !== 0; // Check if the element is odd
}

//.reduce = reduce the elements of an arry.

const prices = [10, 20, 30, 40, 50];
const total = prices.reduce(sum);

console.log(`Total price: ${total} kr`); // Output the total price

function sum(accumalator, element) {
  return accumalator + element; // Add each element to the accumulator
}

const grades = [22, 22.5, 10, 15, 20];
const maximum = grades.reduce(getMaximum);
const min1 = grades.reduce(getmin);

console.log(`Maximum grade: ${maximum}`); // Output the maximum grade
console.log(`Minimum grade: ${min1}`); // Output the minimum grade

function getMaximum(accumalator, element) {
  return Math.max(accumalator, element); // Find the maximum grade
}

function getmin(accumalator, element) {
  return Math.min(accumalator, element); // Find the minimum grade
}

// function declaration = define a reusable block of code that performs a specific task. It can be called by its name and can take parameters and return a value. This we have used many times in the code above.

function greet() {
  console.log(`Hello, Mihir !`);
}

// function expression is a way to define functions as values or variables.

const hello1 = function () {
  console.log(`Hello, Mihir !`);
};

// setTimeout(hello1, 2000); // Call the function expression after 2 seconds
// hello1(); // Call the function expression

const numbers6 = [1, 2, 3, 4, 5];

function square(element) {
  return Math.pow(element, 2);
}

const squares7 = numbers6.map(square);
console.log(squares7); // Output the squared numbers
const evensnumbs = numbers6.filter(function (element) {
  return element % 2 === 0;
});

console.log(evensnumbs); // Output the even numbers

// You can have a whole function inside an argument and also assign them to specifc values like I have done.
// arrow functions = are a shorter syntax and a concise way to write function expressions good for simle functions that you only use once. (parameters) => some code

function hello_hundredth_time() {
  console.log(
    "Hello, Mihir! This is the hundredth time I am saying hello to you!"
  );
}
hello_hundredth_time();

// const hello2 = function () {
//   console.log(`Hello, Mihir !`);
// }; This can be replaced with:

const hello2 = (name1234, age1234) => {
  console.log(`Hello, ${name1234} !`);
  console.log(`You are ${age1234} years old!`);
};

hello2("Mihir_87", "15"); // Call the function expression
// setTimeout(() => console.log(`Hello, Mihir for the 101st time !`), 2000);

let numbers1977 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers1977.map((element) => Math.pow(element, 2));
console.log(squaredNumbers); // Output the squared numbers using arrow function

// object = a collection of realted data and functions that can be used to represent a real-world entity. It is a way to group related data and behavior together. Objects can have properties (data) and methods (functions) that define their behavior.

const person = {
  name: "Mihir",
  lastName: "Bhargav",
  email: "mihirfootball7@gmail.com",
  age: 15,
  isEmloyed: true,
  greeting: function () {
    console.log(`Hello, My name is ${this.name}`);
  },
};

console.log(person.name);
console.log(person.lastName);
console.log(person.email);
console.log(person.age);
console.log(person.isEmloyed);
person.greeting(); // Call the greeting method of the person object

// this= reference to the object where THIS is used.  When we tried to use name for the greeting functions, it didn't work but when I used a this.name tag, it worked as  it referred to the name property of the person object.

// constructer function = a special type of function that is used to create objects. It is a blueprint for creating objects with specific properties and methods. You can create multiple objects using the same constructor function.
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}

const car1 = new Car("Toyota", "Camry", 2020, "Blue");
const car2 = new Car("Honda", "Civic", 2021, "Red");
console.log(car1.make); // Output the make of car1
console.log(car2.model); // Output the model of car2
car1.drive(); // Call the drive method of car1
car2.drive(); // Call the drive method of car2

// class provides a more structured way to create objects and define their properties and methods. It is a blueprint for creating objects with specific properties and methods, similar to a constructor function, but with a more modern syntax.

let discount = false;

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    if (discount) {
      this.price = this.price * 0.8;
      console.log(`You get a 20% discount on ${this.name}!`);
    } else {
      console.log(`No discount available for ${this.name}.`);
    }
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)} sek`);
  }
}

const product1 = new Product("Laptop", 2999.998765);
const product2 = new Product("Phone", 999);

product1.displayProduct();
product2.displayProduct();

// static methods = methods that belong to the class itself rather than to instances of the class. They can be called without creating an instance of the class. They are useful for utility functions or operations that don't require access to instance-specific data.

class Mathutil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return 2 * radius;
  }

  static getCircumference(radius) {
    return 2 * Mathutil.PI * radius;
  }

  static getArea(radius) {
    return PI * (radius * radius);
  }
}

console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(5));
console.log(Mathutil.getCircumference((radius = 10)));
console.log(Mathutil.getArea((radius = 10)));

class User {
  static usercount = 0;

  constructor(username) {
    this.username = username; // store the passed username
    User.usercount++; // increase static count
  }

  sayhello() {
    console.log(`User ${this.username} logged in!`);
  }
}

const user1 = new User("Mihir");
const user2 = new User("John");
const user3 = new User("Alice");

user1.sayhello(); // User Mihir logged in!
user2.sayhello(); // User John logged in!

console.log(`Total users: ${User.usercount}`); // Total users: 3

// Inheritance = a way to create a new class based on an existing class, allowing the new class to inherit properties and methods from the parent class. It promotes code reuse and allows you to create specialized classes based on a general class.

class Animal {
  alive = true;

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Monkey extends Animal {
  name = "monkey";
}
class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`${this.name} is running.`);
    // We can also add methods specific to the Rabbit class.
  }
}
class Dog extends Animal {
  name = "dog";
}

const monkey = new Monkey();
const rabbit = new Rabbit();
const dog = new Dog();

console.log(monkey.alive); // true
rabbit.eat(); // monkey is eating.
rabbit.sleep(); // monkey is sleeping.
rabbit.run(); // rabbit is running.

// Super = a keyword used in classes to call the constructor of the parent class. It allows you to access properties and methods of the parent class from the child class. this = the object, super = the parent.

class Animal1 {
  constructor(name6, age, color) {
    this.name = name6;
    this.age = age;
    this.color = color;
  }
}

class Rat1 extends Animal1 {
  constructor(name6, age, color) {
    super(name6, age, color);
  }
}

class Cat extends Animal1 {
  constructor(name6, age, color) {
    super(name6, age, color);
  }
}

class Rhino extends Animal1 {
  constructor(name6, age, color) {
    super(name6, age, color);
  }
}

const rat1 = new Rat1("Ratty", 2, "Gray");
const cat = new Cat("Kitty", 3, "Black");
const rhino = new Rhino("Rhinny", 5, "Gray");

console.log(rat1); // { name: 'Ratty', age: 2, color: 'Gray' }
console.log(cat); // { name: 'Kitty', age: 3, color: 'Black' }
console.log(rhino); // { name: 'Rhinny', age: 5, color: 'Gray' }

// Super is also used for methods. It is just a message that says Hey, Use the method of the parent.

// getter and setters. Special methods that makes a property more readable and writable. They allow you to define how a property is accessed and modified. Getters are used to retrieve a value, while setters are used to set a value.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth; // Set the width if it's positive
    } else {
      console.error("Width must be positive.");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight; // Set the width if it's positive
    } else {
      console.error("Height must be positive.");
    }
  }

  get width() {
    return this._width.toFixed(1); // Getter for width
  }

  get height() {
    return this._height.toFixed(1); // Getter for height
  }

  get area() {
    return (this._height * this._width).toFixed(1); // Getter for area
  }
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle.width); // Output the width of the rectangle
console.log(rectangle.height); // Output the height of the rectangle
console.log(rectangle.area); // Output the area of the rectangle

//   get area() {
//     return this.width * this.height; // Getter for area
//   }

//   set width(value) {
//     if (value > 0) {
//       this._width = value; // Set the width if it's positive
//     } else {
//       console.log("Width must be positive.");
//     }
//   }

//   get width() {
//     return this._width; // Getter for width
//   }
// }

const x111 = 13;

if (typeof x111 === "number") {
  if (x111 % 2 !== 0) {
    console.log(`${x111} is an odd number.`);
  } else if (x111 % 2 === 0) {
    console.log(`${x111} is an even number.`);
  }
} else {
  console.log(`${x111} is not a number.`);
}

// Destructuring = extract values from arrays and objects, then assign to variables. It allows you to unpack values from arrays or properties from objects into distinct variables, making your code cleaner and more readable.
// [ ] to perform destructuring on arrays, and { } to perform destructuring on objects.

let a = 1;
let b = 2;

[a, b] = [b, a]; // Swap values using destructuring
console.log(a); // Output: 2

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]]; // Swap first and last elements
console.log(colors); // Output: ['white', 'green', 'blue', 'black',

const [firstColor, secondColor, thirdColor, ...extracolors] = colors;
console.log(firstColor); // Output: 'white'
console.log(secondColor); // Output: 'green'
console.log(thirdColor); // Output: 'blue'
console.log(extracolors); // Output: ['black']

function displayperson({ firstname0, lastname0, age0, email0 }) {
  console.log(`First Name: ${firstname0}`);
  console.log(`Last Name: ${lastname0}`);
  console.log(`Age: ${age0}`);
  console.log(`Email: ${email0}`);
}

const person456 = {
  firstname0: "Mihir",
  lastname0: "Bhargav",
  age0: 15,
  email0: "mihir@gmail.com",
};

const person46 = {
  firstname0: "Anvith",
  lastname0: "Bhargav",
  age0: "7",
  email10: "mihir@gmail.com",
};

const { firstname0, lastname0, age0, email0 } = person456;
console.log(firstname0); // Output: 'Mihir'
console.log(lastname0); // Output: 'Bhargav'
console.log(age0); // Output: 15
console.log(email0); // Output: '
displayperson(person456); // Call the function to display person details

// nested objects = objects within objects. You can access properties of nested objects using dot notation or bracket notation.

const person789 = {
  name: "Hamza",
  age: 15,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(person789.name); // 'Hamza'
console.log(person789.age); // 15
console.log(person789.hobbies[1]); // 'gaming'
console.log(person789.address.street); // '123 Main St'
console.log(person789.address.city); // 'New York'

for (const hobby of person789.hobbies) {
  console.log(hobby); // Each hobby
}

// FIXED: Capitalized Address
class Address {
  constructor(city, street, country) {
    this.city = city;
    this.street = street;
    this.country = country;
  }
}

class Person767 {
  constructor(name, age, city, street, country) {
    this.name = name;
    this.age = age;
    this.address = new Address(city, street, country); // pass args to Address
  }
}

// Creating object with all address parts
const person1234 = new Person767(
  "Mihir",
  15,
  "Stockholm",
  "Huddinge",
  "Sweden"
);
console.log(person1234.address); //

const fruits1 = [
  { name987: "apple", color: "red", calories: 95 },
  { name987: "orange", color: "orange", calories: 45 },
  { name987: "banana", color: "yellow", calories: 105 },
  { name987: "coconut", color: "white", calories: 100 },
  { name987: "pineapple", color: "yellow", calories: 195 },
];

console.log(fruits1[0].calories);
fruits1.push({ name987: "grapes", color: "green", calories: 62 });

console.log(fruits1);
fruits1.forEach((fruit) => console.log(fruit.calories));

// sort() = method used to sort elements.

let unique_numbers = [1, 10, 9, 8, 7, 6, 5, 2, 3];
unique_numbers.sort((a, b, c) => a - b - c);
console.log(unique_numbers);

const people = [
  { student_name: "Alex", age: 20, gpa: 1.0 },
  { student_name: "Mihir", age: 15, gpa: 4.0 },
  { student_name: "Anvith", age: 24, gpa: 3.0 },
  { student_name: "Redha", age: 25, gpa: 3.6 },
  { student_name: "Kerem", age: 26, gpa: 2.2 },
];

people.sort((a, b) => a.gpa - b.gpa);
// If you want to set  them in alphabatical order, you can use the localeCompare => b.name.localCompare(1.name)
console.log(people);

// Optional video; to make randomness.
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
shuffle(cards);
// cards.sort(() => Math.random() - 0.5);
console.log(cards);
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], (array[random] = array[random]), array[i]];
  }
}
// Fisher yates algorithm above.

// Date objects - contain values that represent dates and times.
const date = new Date(2025, 6, 27, 6, 55, 6);
console.log(date);
const year = date.getFullYear();
console.log(year);
// THis can be done for month, day, hour, minutes, seconds and even ms. They can be changed, applied functions to and formatted as we wish.

// Closure = a function defined inside of another function, the inner function has access to the variables and scope of the outer function. Allow for privae variables.

function outer() {
  let message2 = "Hello";

  function inner() {
    console.log(message2);
  }
  inner();
  // Without the line of code above (inner()), the hello will not be displayed. But by saying inner(), all the variables also work for the inner function.
}

outer();

let count1 = 0;
function increment() {
  count++;
  console.log(`COunt increased to ${count}`);
}

increment();
increment();
increment();
increment();

function createGame() {
  let score = 0;
  function increasescore(points) {
    score += points;
    console.log(`+ ${points} pts`);
  }

  function decreasescore(points) {
    score -= points;
    console.log(`- ${points} pts`);
  }

  function getScore() {
    return score;
  }

  return { increasescore, decreasescore, getScore };
}

const game = createGame();

// Score tracking
game.increasescore(5); // +5
game.increasescore(5); // +5
game.decreasescore(3); // -3
score = 10000000000;
// This shows that this can easily be affected by other statements. (The console is showing 10000000 points. ) Let's set the whole thing in a closure.
console.log(`The current score is ${game.getScore()}`);
// Now as we can see, the score = 1000000; has no affect on the score in the way we want it to work.

const timeoutid = setTimeout(() => window.alert("How are you today?"), 3000);
clearTimeout(timeoutid);

let timeoutid1;

function startTimer() {
  timeoutid1 = setTimeout(() => window.alert("Hello"), 3000);
}

function clearTimer() {
  clearTimeout(timeoutid1);
}

// For clock project

function updateClock() {
  const now = new Date();
  const hours1 = now.getHours().toString().padStart(2, 0);
  const minutes1 = now.getMinutes().toString().padStart(2, 0);
  const seconds1 = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours1}:${minutes1}:${seconds1}`;
  document.getElementById("timer_style").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

const displaySW = document.getElementById("displaySW");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isrunning = false;

function start() {
  if (!isrunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isrunning = true;
  }
}

function stop() {
  if (isrunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isrunning = false;
  }
}

function reset() {
  clearTimeout(timer);
  timer = null;
  startTime = 0;
  elapsedTime = 0;
  isrunning = false;
  if (!isrunning) {
    displaySW.textContent = "00:00:00:00";
  } else {
    console.log("error");
  }
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  displaySW.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(
    milliseconds
  )}`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

// ES6 = an external file that contains reusable code that can be imported into other Javascript files.

// import{PI, getCircumference_1} from './mathUtil'
// This didn't work due to the huge amount of similar tags and varabiles like const PI and so on. But know that using the type="module" in html, you can important. This below is how you export.

// export const PIE = 3.14159;

// export function getCircumference_1(raduis) {
//   return radius * 2 * PI;
// }

// export function getArea_1(radius_1) {
//   return PI * radius_1 * radius_1;
// }

// synchronous = exectue line by line is a sequential order.
// asynchronus code = multiple operations to be performed concurrently without waiting
// Doesn't block the execution flow and allows the program tp continue. Used often in operations, network requests, fetching data. Handled with callbacks, promises, async, Await.

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }

// func1(func2);

// Task 2,3,4 all runs before the task 1 and doesn't wait for it. Now with callbacks, it does.

// Error= An object that is created to represent a problem.

console.log("Hello");

try {
  console.log();
  // This variable is obviusly not defines anywhere
} catch (error) {
  console.error(error);
  // Eventhough this is a clear error, the program runs; the you have reached the end is still printing in the console.
} finally {
  console.log("This always exectues, no matter how many or which error");
}

console.log("You have reached the end!");
// Variable not defined, defined several times, typos => not a function,
// But in case of an error, the whole program is interrupted which we don't want.

// try{
// const dividend = Number(window.prompt("Enter a dividend:  "));
// const divisor = Number(window.prompt("Enter a divisor"));

// if(divisor == 0){
//   throw new Error("You cant divide with 0");
// }

// if(isNaN(dividend) || isNan(divisor)){
// throw new Error("You can only use numbers!");
// }

// const result_of_division =  dividend / divisor;
// console.log(result_of_division);
// }

// catch(error){
//   console.log(error);
// }

// console.log("END conformation");

const Calc_display = document.getElementById("Calc_display");

function appendToDisplay(input) {
  Calc_display.value += input;
}

function clear_display() {
  Calc_display.value = "";
}

function calculate() {
  try {
    Calc_display.value = eval(Calc_display.value);
  } catch (error) {
    Calc_display.value = "Error";
  }
}

// DOM = doucment object model. The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, where each HTML element becomes a node in the tree. getElement byID would be an example of a DOM.

console.log(document);
console.dir(document);
document.body.style.backgroundColor = "rgba(205, 205, 205, 0.28)";
// This has a lot of system info about the file. Changes to this can be made.

// element selector = method used to target and manipulate html tags. We have already used getElementById and so on.
// 2. document.getElementByClass 3. document.getElementByTagname 4. querySelector() 5. queryselectorAll();

const element_selectors = document.getElementById("element_selectors");
element_selectors.style.backgroundColor = "yellow";
// This style was produces purely from JS.

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);
console.log(liElements);

for (let h4Element of h4Elements) {
  // Apply style to the current h4 element, not the collection
  h4Element.style.backgroundColor = "yellow";
}

for (let liElement of liElements) {
  // Apply style to the current h4 element, not the collection
  liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach((h4element) => {
  h4element.style.color = "blue";
});

const element_1 = document.querySelector(".apple");
// querySelectorAll selects all the queries like li or h4.
element_1.style.backgroundColor = "orange";

// DOM navigation
// 1. apple would be the .firstElementChild for the fruits <ul>
// 2. Orange would be the .lastElementChild for the fruits <ul> This can be combined with for  example  queryselectALL to style last li from EVERY ul.
// You can select a sibling using getElementById and then use the nextElementSibling to make changes to the net attribute. If you selected apple, you could make changes to bannana.
// 4. There is also the .previousElementSibling which selects the previous instead of the next.
// You can select the parent of an element using the .parentElement
// 6. Finally, you can access  the children of an element using .children

const newH1 = document.createElement("h1");
newH1.textContent = "I like pizza";
newH1.style.color = "red";
newH1.style.textAlign = "center";

document.getElementById("box1").append(newH1);
// document.getElementById("box1").removeChild(newH1);  WE can also remove the created h1.

// STEP 1 - create the element
// // Step 2 - add attributes / properties.
// // Ste[3] - append element to DOM.

// Event listener = listens for specific events to create interactive web pages.
const box2 = document.getElementById("box2");

// You can also assign classes using .ClassList;

function changeColor_1(event) {
  // This will show event details in the console
  // You can also do something like:
  // box2.style.backgroundColor = "lightblue";
}

box2.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 🤕";
});

// You can also pass arrow functions through event listeners.

box2.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't click it !!";
});

box2.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click me :) ";
});

const box3 = document.getElementById("box3");

const moveamount = 10;
let x654 = 0;
let y654 = 0;

// Ensure box is positioned absolutely or relatively
box3.style.position = "relative"; // or "absolute" depending on your layout

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y654 -= moveamount;
        break;
      case "ArrowDown":
        y654 += moveamount;
        break;
      case "ArrowLeft":
        x654 -= moveamount; // ❗ Fixed: Left = subtract
        break;
      case "ArrowRight":
        x654 += moveamount; // ❗ Fixed: Right = add
        break;
    }

    box3.style.top = `${y654}px`;
    box3.style.left = `${x654}px`;
  }
});

const hide = document.getElementById("hide");
const myImg = document.getElementById("img-hide");

hide.addEventListener("click", () => {
  if (myImg.style.display === "none" || myImg.style.display === "") {
    myImg.style.display = "block";
    hide.textContent = "HIDE";
  } else {
    myImg.style.display = "none";
    hide.textContent = "SHOW";
  }
});

// NodeList
let myBtns = document.querySelectorAll(".myBtns");
console.log(myBtns);

//

// Classlist
const mybutton = document.getElementById("button_id");
mybutton.classList.add("enabled");
mybutton.classList.add("hover");
// There is also remove(that removes the property)
// And the toggle(Remove if present, Add if not)
// replace(oldclass, newclass)
// You can then add css code for the class enabled giving it dynamic properties.

let buttons = document.querySelectorAll(".myBtns");
buttons.forEach((button) => {
  button.classList.add("enabled");
});

// Rock - paper - scissors
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a tie !";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You WIN !" : "You LOSE !";
        break;

      case "paper":
        result = computerChoice === "rock" ? "You WIN !" : "You LOSE !";
        break;

      case "scissors":
        result = computerChoice === "paper" ? "You WIN !" : "You LOSE !";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER:  ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greentext", "redtext");

  switch (result) {
    case "You WIN !":
      resultDisplay.classList.add("greentext");
      console.log("You win");
      break;
    case "You LOSE !":
      resultDisplay.classList.add("redtext");
      console.log("You lost");
      break;
    default:
      // No color change for tie or other results
      break;
  }
}

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[index].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

//   function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog 🐕");
//     if (callback) callback(); // ✅ Call the callback
//   }, 1500);
// }

// function CleanKitchen(callback) {

//   setTimeout(() => {
//     console.log("You clean the kitchen");
//     if (callback) callback(); // ✅ Call the callback
//   }, 2500);

//   return new Promise(resolve, reject) =>{

//   }
// }

// function Takeouttrash(callback) {
//   setTimeout(() => {
//     console.log("You take out the trash");
//     if (callback) callback(); // ✅ Call the callback
//   }, 500);
// }

// walkDog(() => {
//   CleanKitchen(() => {
//     Takeouttrash(() => {
//       console.log("You finished the chores, .... for now !");
//     });
//   });
// }); This is with callbacks which is worse, called callback hell.

// Promise = An object than manages aynchronos operations. Wrap a promise Object around {asyncronos code}. It can be resolved or rejected.
// Example do these in order
// 1. Walk the dog, 2. Clean the kitchen, 3. Take out the trash.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogIsThere = true; // simulate condition
      if (dogIsThere) {
        console.log("You walk the dog 🐕");
        resolve("Dog walked");
      } else {
        reject("Didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const detergentAvailable = true; // simulate condition
      if (detergentAvailable) {
        console.log("You clean the kitchen 🧼");
        resolve("Kitchen cleaned");
      } else {
        reject("Didn't clean the kitchen!");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashIsFull = true; // simulate condition
      if (trashIsFull) {
        console.log("You take out the trash 🗑️");
        resolve("Trash taken out");
      } else {
        reject("Didn't take the trash out!");
      }
    }, 500);
  });
}

// Chained execution
// walkDog()
//   .then(cleanKitchen)
//   .then(takeOutTrash)
//   .then(() => console.log("You finished the chores, ... for now!"));

async function dochores(params) {
  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);
}

// dochores();

// async = makes a function return a promise
// Await = makes an async function wait for a promise
// Await is depends on async.
// JSON files- data interchange formate used for exchanging data between a aserver and a web application.

const names = ["Mihir", "Sharmada", "Prabhat", "Anvith"];
const person_09 = {
  name: "Mihir",
  age: 15,
  isEmployed: true,
  hobbies: ["Coding", "football", "learning"],
};

const people_family = [
  {
    name: "Mihir",
    age: 15,
    isEmployed: true,
  },

  {
    name: "ANvith",
    age: 5,
    isEmployed: false,
  },
];

const jsonString = JSON.stringify(person_09);
console.log(jsonString);
console.log(people_family);
JSON.stringify(people_family);

const jsonNames = `["Mihir", "Sharmada", "Prabhat", "Anvith"]`;

const jsonPerson = `{
  name: "Mihir",
  age: 15,
  isEmployed: true,
  hobbies: ["Coding", "football", "learning"],
}`;

const parsedData = JSON.parse(jsonNames);
console.log(jsonNames);
console.log(parsedData);

fetch("person.json")
  .then((response) => response.json())
  .then((value) => console.log(value.name))
  .catch((error) => console.log(error));

// fetching information and data.
//   fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {

//     if (!response.ok ){
//       throw new Error ("Could not fetch resorce");
//     }
// return response.json();

//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error)); Here is an alternative method.

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    imgElement.style.height = "300px";
    imgElement.style.width = "300px";
    imgElement.style.marginBottom = "15px";
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// Not you have replaced the card by the div. So, whenever we redisplay, you must refer to the div container id and not the div class.
const weatherform = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.getElementById("container");
const apikey = "da23bd93cb8a7675707a6d50fd1d856f";

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError("Could not fetch weather data");
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Error- Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.innerHTML = ""; // Clear previous content
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("h1");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${temp.toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  tempDisplay.classList.add("tempDisplay");
  weatherEmoji.classList.add("weatherEmoji"); // ✅ fixed

  descDisplay.style.textDecoration = "italic";
  descDisplay.style.fontFamily = "cursive";
  weatherEmoji.style.fontSize = "120px";

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300: {
      return "⛈️";
    }
    case weatherId >= 300 && weatherId < 400: {
      return "🌧️";
    }
    case weatherId >= 500 && weatherId < 600: {
      return "🌧️";
    }
    case weatherId >= 600 && weatherId < 700: {
      return "❄️";
    }
    case weatherId >= 700 && weatherId < 800: {
      return "🌫️";
    }
    case weatherId === 800: {
      return "☀️";
    }
    case weatherId > 800: {
      return "☁️";
    }
    default: {
      return "❓";
    }
  }
}

function displayError(message) {
  let errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.style.display = "flex";
  card.innerHTML = ""; // Clear any previous content
  card.appendChild(errorDisplay);
}

let computerNumber = Math.floor(Math.random() * 100 + 1);
console.log(computerNumber);

function guessnum() {
  let player_number = document.getElementById("number_game").value;
  if (player_number > 100) {
    console.log("Please enter a number between 1-100");
  } else if (computerNumber == player_number) {
    console.log("You guessed the number!");
  } else if (player_number < computerNumber) {
    console.log("Guess a higher number!");
  } else if (computerNumber < player_number) {
    console.log("Guess a lower number!");
  } else if ((player_number > 100) | (player_number < 0)) {
    console.log("Please enter a number between 1- 100");
  } else {
    console.log("Please enter a number between 1-100");
  }

  console.log(player_number);
}

// Random password generator
function generate_random_password() {
  let allowedChars1 = "abcdefghijklmnopqrstuvwxy1234567890@#$%^&*()/''.,";
  let password_length = 10;
  let password123 = "";

  for (let i = 0; i < password_length; i++) {
    let randomIndex1 = Math.floor(Math.random() * allowedChars1.length);
    password123 += allowedChars1[randomIndex1];
  }

  console.log(password123);
}

generate_random_password();

async function generate_quote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "XYL0ypbz7gA/klSb3q8taw==3zj7Mr1ALrPHexAL",
      },
    });
    const quote = await response.json();
    console.log(quote);
    document.getElementById(
      "quote_generate_here"
    ).textContent = `${quote[0].quote} `;
    document.getElementById(
      "author_generate_here"
    ).textContent = ` — ${quote[0].author}`;
  } catch (error) {
    console.log("Error fetching quote:", error);
  }
}
