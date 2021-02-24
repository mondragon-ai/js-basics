// Creating Our First Obj
// ======================================
console_title('Create Object');
const user = new Object()

// Add Attributes
user.name = 'Deku'
user.email = 'Deku@uahigh.jp'
user.age = 16
console.log(user) 
// prints: { name: 'Deku', email: 'Deku@uahigh.jp', age: 16 }

// Modify Attributes
user.name = 'Bakugo'
user.email = 'Bakugo@uahigh.jp'
user.age = 17
console.log(user) 
// prints: { name: 'Bakugo', email: 'Bakugo@uahigh.jp', age: 17 }
// or even add new properties
user.classRank = 3

console.log(user) 
// prints: { name: 'Bakugo', email: 'Bakugo@uahigh.jp', age: 17, classRank; 3 }

// Object Literals
// ======================================
console_title('Object Literals');

const user_lit = {
    name: 'Deku',
    email: 'Deku@uahigh.jp',
    age: 16
}
console.log(user_lit) 
// prints: { name: 'Deku', email: 'Deku@uahigh.jp', age: 16 }

// Calling Values
console.log(user_lit.name) 
// prints: 'Deku'
console.log(user_lit.email) 
// prints: 'Deku@uahigh.jp'
console.log(user_lit.age) 
// prints: 16
console.log(user_lit.classRank) 
// prints: undefined

// Calling Values using [] Notation
// console.log(user.name) 
// prints: 'Deku'
console.log(user_lit['name']) 
// prints: 'Deku'

const key = 'name'
console.log(user_lit['key']) 
// prints: 'Bakugo'

// Enumerating
// ======================================
console_title('Enumerating');
function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }

const n_user = {
    name:'Deku',
    email: 'Deku@uahigh.jp',
    age: 16
}
const heroProps = showProps(n_user, 'user')
console.log(heroProps)

// Assigning Methods
// ======================================
console_title('Assigning Methods');
// const m_usr = {
//     name: 'Deku',
//     email: 'Deku@uahigh.jp',
//     age: 16,
//     greet: function() {
//        console.log('Hello, I am a hero!')
//     }
// }

// m_usr.greet();

// const m_usr = {
//     name: 'Deku',
//     email: 'Deku@uahigh.jp',
//     age: 16,
//     greet: function() {
//        console.log(`Hello, I am a hero and my name is ${name}`)
//     }
// }

// const m_usr = {
//     name: 'Deku',
//     email: 'Deku@uahigh.jp',
//     age: 16,
//     greet: function() {
//        console.log(`Hello, I am a hero and my name is ${this.name}`)
//     }
// }

const m_usr = {
    name: 'Deku',
    email: 'Deku@uahigh.jp',
    age: 16,
    greet() {
       console.log(`Hello, I am a hero and my name is ${this.name}`)
    }
}

m_usr.greet()

// Objects inside Objects
// ======================================
console_title('Objects inside Objects');
// const o_usr = {
//     name:'Deku',
//     email: 'Deku@uahigh.jp',
//     age: 16,
//     greet() {
//        console.log(`Hello, my name I am a hero and my name is ${this.name}`)
//     },
//     powers: {
//         damage: 10,
//         type: 'power',
//         name: 'All for One',
//     }
// }

// console.log(o_usr.powers)

// Arrays In Objs (maps)
const o_usr = {
    name:'Deku',
    email: 'Deku@uahigh.jp',
    age: 16,
    greet() {
       console.log(`Hello, my name I am a hero and my name is ${this.name}`)
    },
    powers: [
    {
        damage: 4,
        type: 'power',
        name: 'ice',
    },
    {
        damage: 5,
        type: 'power',
        name: 'fire',
    }]
}

console.log(o_usr.powers)

// Peicing it All Together
// ======================================
console_title('Peicing it All Together');
const hero_obj = {
    name: 'Todoroshi',
    email: 'Todoroshi@uahigh.jp',
    age: 16,
    greet() {
       console.log(`Hello,  I am a hero and my name is ${this.name}`)
    },
    powers: [
    {
        damage: 4,
        type: 'power',
        name: 'Ice',
    },
    {
        damage: 5,
        type: 'power',
        name: 'Fire',
    }],
    logPowers() {
        console.log('These are my powers:')
        this.powers.forEach(power => {
            console.log(`${power.name}`)
        })
    }
}

console.log(hero_obj.greet())
console.log(hero_obj.logPowers())







// Example Function Homwork
// ======================================
function console_title(title) {
    console.log(`\n// ${title}`)
    console.log("// ======================================")
}
