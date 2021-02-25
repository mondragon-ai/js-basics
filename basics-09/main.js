// Try . . . Catch
// ======================================
console_title('Try . . . Catch');
try {
    alert("Welcome Hero!");
  }
  catch(err) {
    console.log(err.message);
  }

// Throw
var hero = 'bakugo'
try {
  if (hero == 'deku') { 
    console.log(`Hello, my name is ${hero}`)
  };
  throw "Not Deku"
}
catch(err) {
  console.log(err.message);
}

// Finally
var hero = 'bakugo'
try {
  if (hero == 'deku') { 
    console.log(`Hello, my name is ${hero}`)
  };
  throw "Not Deku"
}
catch(err) {
  console.log("Not Deku");
}
finally {
  alert("Finally block will always execute!")
}


// Example Function Homwork
// ======================================
function console_title(title) {
    console.log(`\n// ${title}`)
    console.log("// ======================================")
}
