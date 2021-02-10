// Assignments
var x = 5;
console.log("x: ", x);

x += 1; //placing the = after the operand appends to the variable
// x =+ 1; placing the = before the operand reasigns the variable
x /= 2;
console.log("x: ", x);

var y = "Angel ";
y += "Mondragon";
console.log("y: ", y);

// Arithmatic
// x - y // Substract x with the y value
// x + y // Multiply x with the y value
// x / y // Divide x with the y value
// x % y // Divide x with the y value and return the remainder
console.log("Arithmatic");
console.log("-: ", 5 - 10);
console.log("+: ", 5 + 10);
console.log("/: ", 5 / 10);
console.log("%: ", 5 % 10);

//Comparison Ops
// operand1 == operand2 // Returns true if both operands are equal
// operand1 != operand2 // Returns true if both operands are not equal
// operand1 >= operand2 // Returns true if operand1 is greater than or equal to operand2
// operand1 <= operand2 // Returns true if operand1 is less than or equal to operand2
// operand1 > operand2 // Returns true if operand1 is greater than operand2
// operand1 < operand2 // Returns true if operand1 is less than operand2
// operand1 === operand2 // Returns true if both operands are equal & the same type (i.e. both strings or numbers)
// operand1 !== operand2 // Returns true if both operands are not equal & the same type (i.e. both strings or numbers)

console.log("Comparison");
console.log("==: ", 5 == 10);
console.log("!=: ", 5 != 10);
console.log(">=: ", 5 >= 10);
console.log("<=: ", 5 <= 10);
console.log(">: ", 5 > 10);
console.log("<: ", 5 < 10);

var x = 0;
var y = "0";
console.log("==: ", x == y);
console.log("===: ", x === y);
console.log("!==: ", x !== y);

//Logical Ops
console.log("Logical");
// True && False // Returns false because not both expressions are true
// True || False // Returns true because one of the expressions are true
// True != False // Returns true because true does NOT equal false
// True == False // Returns false because not both expressions are equal

console.log("&&: ", true && false);
console.log("||: ", true || false);
console.log("!=: ", true != false);
console.log("==: ", true == false);

// Ternary Ops
console.log("Ternary");
// condition ? val1 : val2
// condition ? val1 : condition2 ? val2 : val3
console.log("ternary - true: ", true ? 5 : null );
console.log("ternary - false: ", false ? 5 : null );