// Type vs Non-Type
// int a = 1;
// String str = "Hello";
// boolean isBool = true;

var a = 1;
let str = "Hello";
const isBool = true;

a = 5;
str = "0";

var c = a + str;

console.log("a: ", a, "str: ", str);
console.log("c: ", c);

// Primative Types

// Primative Types as objects
console.log("c: ", c.length);

var str_obj = new String("Hello World");
console.log("str_obj: ", str_obj);
console.log("str_obj.ln: ", str_obj.length);
console.log("str_obj.indexOf: ", str_obj.indexOf("o"));

var obj = new Object();
console.log("obj: ", obj);