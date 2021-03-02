// Objects & Limitations
// ======================================
console_title('Objects & Limitations');
const heroOne = {
    name: 'Bakugo',
    email: 'Bakugo@uahigh.jp',
    age: 16,
    greet() {
       console.log('Hello, I am a hero!')
    }
}

console.log(heroOne);

// Problem
const heroTwo = {
    name: 'Todoroshi',
    email: 'Todoroshi@uahigh.jp',
    age: 17,
    greet() {
       return ('Hello, I am a hero!')
    }
}

console.log(heroTwo);

// Objects & Solutions
// ======================================
console_title('Objects & Solutions');

// THE new Keyword
// class Hero 
// {
//     constructor(name, email) 
//     {
//       this.name = name
//       this.email = email
//     }
// }

// var bakugo = new Hero('Bakugo', 'Bakugo@uahigh.jp');

// console.log(bakugo);

class Hero 
{
    constructor(name, email)
    {
      this.name = name;
      this.email = email;
    }
    greet() {
       console.log(`Hello, my name I am a hero and my name is ${this.name}!`)
    }
}

// var bakugo = new Hero('Bakugo', 'Bakugo@uahigh.jp');

// bakugo.greet();
//prints: 'Hello, my name I am a hero and my name is Bakugo!'

// var deku = new Hero('Deku', 'Deku@uahigh.jp')
// deku.greet()
//prints: 'Hello, my name I am a hero and my name is Deku!'

// Method Chaining
// ======================================
console_title('Method Chaining');
class NewHero 
{
    constructor(name, email)
    {
      this.name = name;
      this.email = email;
      this.battleWins = 0; //
    }
    greet() {
       console.log(`Hello, my name I am a hero and my name is ${this.name}!`)
    }
    battlesWon() {
       this.battleWins++
       console.log(`I have won ${this.battleWins} battles`) 
    }
}

// const bakugo = new NewHero('Bakugo', 'Bakugo@uahigh.jp');

// bakugo.greet().battlesWon();
//prints: Cannot call fn on undefined.

// Return this Keyword
// ======================================
console_title(' Return \'this\' Keyword');
class ReturnHero {
    constructor(name, email)
    {
      this.name = name;
      this.email = email;
      this.battleWins = 0
    }
    greet() 
    {
       console.log(`Hello, my name I am a hero and my name is ${this.name}!`);
       return this;
    }
    battlesWon() 
    {
       this.battleWins++
       console.log(`I have won ${this.battleWins} battles`)
       return this;
    }
}
const bakugo = new ReturnHero('Bakugo', 'Bakugo@uahigh.jp');

bakugo.greet().battlesWon();

bakugo.battlesWon().battlesWon().battlesWon();

// Class Inheretence
// ======================================
console_title('Class Inheretence');

var heroes = ['bakugo', 'deku', 'allMight']

class TopHero extends Hero 
{
    suspend(hero) 
    {
        heroes = heroes.filter(h => {
            return h != hero;
        })
    }
}

var allMight = new TopHero('All Might', 'amight@uahigh.jp')

console.log(heroes)
// prints: [bakugo, deku, allMight]

allMight.greet();
allMight.suspend('bakugo');

console.log(heroes)
// prints: [deku, allMight]


// Example Function Homwork
// ======================================
function console_title(title) {
    console.log(`\n// ${title}`)
    console.log("// ======================================")
}
