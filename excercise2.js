let a = Number(prompt("enter first number"));
let op = prompt("Enter operator (+, -, *, /");
let b = Number(prompt("Enter second number"));
let result;

if (op === "+") result = a + b;
else if (op === "-") result = a - b;
else if (op === "*") result = a * b;
else if (op === "/") result = b === 0 ? "Cannot divide by zero" : a / b;
else result = "invalid operator";

alert("Result; " + result);
