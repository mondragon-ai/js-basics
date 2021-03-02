// Built In Objects
// ======================================
console_title('Built In Objects');
var myStr = "Hello, my name is Deku";
console.log(".lenth:", myStr.length) 
// prints the length of the string: 22
console.log(".toUpperCase:", myStr.toUpperCase()) 
// prints: "HELLO, MY NAME IS DEKU"
console.log(".toLowerCase:", myStr.toLowerCase()) 
// prints: "hello, my name is deku"
console.log(".chartAt:", myStr.charAt(3)) 
// prints: "l"
console.log(".indexOf:", myStr.indexOf("Deku")) 
// prints: 19

// Object Literals
// ======================================
console_title('Object Literals');
let basic_obj = {
    name: "angel",
    age: 25,
    isMale: true,
    hobbies: ["being hungry", "sleeping"]
}

console.log("Obj Literal Dot Notaion: ", basic_obj.name); // dot notations attributes

console.log("Obj Literal Brack Notation: ", basic_obj["name"]); // braket notation (variable key)

console.log("Obj Literal hobbies[]: ", basic_obj.hobbies); 

console.log("Obj Literal hobbies[1]: ", basic_obj.hobbies[1]); 

// Create Object
// ======================================
console_title('Create Object');
var obj = new Object({
    hero: 'deku',
    class: 2,
    power: ['speed','power']
})

console.log("obj.hero:", obj.hero); // prints: Deku


// Reassign Attributes
// ======================================
console_title('Reassign Attributes');
var deku = new Object({
    hero: 'deku',
    class: 2,
    powers: ['speed','power']
})

console.log("Obj Deku.class:", deku.class);

deku.class = 3;

console.log("Obj Deku.class:", deku.class);

var flying = new Object({
    powers: [ ...deku.powers, 'flying']
})

Object.assign(deku,flying)

console.log("Obj Deku:", deku)
// prints: {hero: 'deku', class: 2, powers: ['speed','power', 'flying']}

console_title('Methods: Object.assign()');
// Methods: Object.assign()
// ======================================
var deku = new Object({
    hero: 'deku',
    class: 2,
    powers: ['speed','power']
})

var flying = new Object({
    powers: [ ...deku.powers, 'flying']
})

const newHero = Object.assign({},deku,flying)

console.log("New Hero Obj:", newHero)
// prints: {[hero: 'deku', class: 2, powers: ['speed','power', 'flying']}

console_title('Methods: Object.entries()');
// Methods: Object.entries()
// ======================================
var deku = new Object({
    hero: 'deku',
    class: 2,
    powers: ['speed','power']
})

console.log("Object.entries:", Object.entries(deku))
// prints: {["hero": 'deku'], ["class": 2], ["powers": ['speed','power', 'flying']]}


// Dot Notation
// ======================================
console_title('Dot Notation w/ existing Obj Class: Date()');
var newDate = new Date();
console.log(".toLocaleDateString:", newDate.toLocaleDateString());
// prints: 5/2/2020 12:15:16 PM
console.log(".getHours:", newDate.getHours())
// prints: 12
console.log(".getFullYear:", newDate.getFullYear())
// prints: 2020
console.log(".getFullYear:", newDate.getFullYear())
// prints: 2020







// Example Function Homwork
// ======================================
function console_title(title) {
    console.log(`\n// ${title}`)
    console.log("// ======================================")
}
