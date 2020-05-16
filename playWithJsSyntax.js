const fs = require('fs');

fs.writeFileSync('hello.txt', 'copy');

//variable declaration
var name1 = 'Moana';
var age1 = 25;
var hasHobby1 = true;

//Let const
const name = 'Moana';
let age = 25;
let hasHobby = true;

age = 30;

// Functions
function sampleFunction(name, age, hasHobby) {
  return(
    'Name ' + name + ' Age ' + age + ' HasHobby ' + hasHobby
  )
}

console.log(sampleFunction(name, age, hasHobby));

const storeFunctionInVariable = function sampleFunction(name, age, hasHobby) {
  return(
    'storeFunctionInVariable Name ' + name + ' Age ' + age + ' HasHobby ' + hasHobby
  )
};

console.log(storeFunctionInVariable(name, age, hasHobby));

const arrowFunction = (name, age, hasHobby) => 'arrowFunction Name ' + name + ' Age ' + age + ' HasHobby ' + hasHobby;

console.log(arrowFunction(name, age, hasHobby));


//Objects
// this helps accessing attributes in that scope
const objectExampleWithThis = {
  name: 'Moana',
  age: 25,
  greetReturnsNameUndefined: () => console.log('Hi Iam ' + this.name),
  greetReturnName: function() {console.log('Hi Iam ' + this.name)},
  greet() {console.log('Hi Iam ' + this.name)}
};

const { greet } = objectExampleWithThis; //Destructuring

console.log(objectExampleWithThis.greet());
console.log(objectExampleWithThis.greetReturnName());
console.log(objectExampleWithThis.greetReturnsNameUndefined());

const copyObjectUsingSpread = {...objectExampleWithThis}; //Spread operator

console.log('copyObjectUsingSpread', copyObjectUsingSpread);

//Arrays

const hobbies = ['Movies', 'Programming'];

const [hobby1, hobby2] = hobbies; //Destructuring array also possible we can have any names since it deals with index

for(let hobby of hobbies) {
  console.log('My Hobby: ' + hobby)
}

const mapArray = hobbies.map(hobby => 'New hobby array: ' + hobby);

console.log('mapArray', mapArray);

hobbies.push('Embroidery');

const copyArrayUsingSpread = [...hobbies]; //spread operator

console.log(copyArrayUsingSpread);

//Array and object are reference types const variable hold address of the object/array that are stored
//hence we able to edit array or obj even we declare it as const


const toArray = (arg1, arg2, arg3) => [arg1, arg2, arg3]; //Not efficient

const restOperatorExapmle = (...args) => args; //Here args is an array itself

console.log('toArray ', toArray(1,2,3,4));
console.log('restOperatorExapmle ', restOperatorExapmle(1,2,3,4));