// Call Back Functions
// ======================================
function callback_fun() {

    console.log("CALLBACK");

}

function fun00() {

    console.log("Fn One");

}

function fun01() {

    console.log("Fn Two");

}

// fun00();

// fun01();

callback_fun();

// Utiltiy One: Async Code
// ----------------------------------------
// fun00();

fun01();

setTimeout((obj) => { console.log(obj); }, 3000);

// Utiltiy Two: Events
// ----------------------------------------





