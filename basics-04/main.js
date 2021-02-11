// Declarations
// ======================================
const const_v = 5 // it will return a 5
let let_v = 5 // it will return a 5
var var_n = 5 // it will return a 5

// console.log(const_v,let_v,var_n);

// Functions
// ======================================
// Normal Fn
function myFun() 
{
    console.log(const_v,let_v,var_n);
}

const result = function() 
{
    return "Hello World!";
}

const str = result();

console.log(str);

// Arrow Fns
arrowFn = () => 
{
    console.log(const_v,let_v,var_n);
}

arrowFn();

const arr_result = () =>
{
    return "Hello World!";
}

// Methods 
//-------------
console.log(arr_result().toUpperCase());

// Params & Args
const param_args = name => `Hello ${name}!`;

console.log(param_args("Angel"));

const sum = (a=0,b=0) => a + b;

console.log(sum(10,5));


// Scope
// ======================================
function varExample() {
    var num = 5;
    {
      var num = 2;  // same variable!
      console.log(num);  // 2
    }
    console.log(num);  // 2
}
  
varExample();

function letExample() {
    let num = 5;
    {
      let num = 2;  // different variable
      console.log(num);  // 2
    }
    console.log(num);  // 5
}

letExample();

// Methods: Loops & Iterations
// ======================================
const heros = ["Deku", "All Might", "Bakugo"];

heros.forEach((obj,index) => 
{
    console.log("Hero: ", obj, " ", index);
});

// Control Flow
// ======================================

// If . . . Else  (else if)
const condition = true;

if (!condition) {

    console.log(condition);

}  else if (condition) {

    console.log("INSIDE ELSE IF: ");

} else {

    console.log("INSIDE ELSE: ");
    
}

console.log("OUTSIDE: ");

// Switch & Case
const key = "WORLD";

switch (key) {

    case "HELLO": console.log("HELLO")
        
        break;

    case "WORLD": console.log("WORLD")
        
        break;

    default:
        
        break;

}

// condition ? result : result 
const result_t = false ? "IM TRUE" : false ? "IM TRUE x 2" : "IM FALSE";

console.log(result_t);


