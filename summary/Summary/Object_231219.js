//*********** object ***********

function getCharacter() {
  let character = {
    name: "Peter",
    age: 25
  };
  return character;
}
console.log(getCharacter());

// {name: "Peter", age: 25}

function insideObject() {
  let character = {
    name: {
      first: "Peter",
      last: "Williams"
    },
    age: 25
  };
  return character;
}
console.log(insideObject());

// {name: {first: "Peter", last: "Williams"}, age: 25}

function getTheAge() {
  let character = {
    name: {
      first: "Peter",
      last: "Williams"
    },
    age: 25
  };
  return character.age;
}
console.log(getTheAge());

//  25

function getLastName() {
  let character = {
    name: {
      first: "Peter",
      last: "Williams"
    },
    age: 25
  };
  return character.name.last;
}
console.log(getLastName());

//  Williams

/*
 ********************************************
 ************** Array + Object **************
 ********************************************
 */

function arrayObject() {
  let characters = [
    { firstName: "Peter", lastName: "Williams", age: 24 },
    { firstName: "James", lastName: "Smith", age: 30 },
    { firstName: "jess", lastName: "Bath", age: 18 }
  ];
  return characters;
}
console.log(arrayObject());

//[{firstName: "Peter", lastName: "Williams", age: 24}, {firstName: "James", lastName: "Smith", age: 30}, {firstName: "jess", lastName: "Bath", age: 18}] (3)

//
//
function getSmith() {
  let characters = [
    { firstName: "Peter", lastName: "Williams", age: 24 },
    { firstName: "Josh", lastName: "Smith", age: 30 },
    { firstName: "jess", lastName: "Bath", age: 18 }
  ];
  return characters[1].lastName;
}
console.log(getSmith());

//Character index number 1, last name(obj)
//smith

//
//

function getLastName(index) {
  let characters = [
    { firstName: "Peter", lastName: "Williams", age: 24 },
    { firstName: "Josh", lastName: "Smith", age: 30 },
    { firstName: "jess", lastName: "Bath", age: 18 }
  ];
  return characters[index].lastName;
}
console.log(getLastName(0));

//Williams

//
//

function getAnything(index, prop) {
  let characters = [
    { firstName: "Peter", lastName: "Williams", age: 24 },
    { firstName: "Josh", lastName: "Smith", age: 30 },
    { firstName: "jess", lastName: "Bath", age: 18 }
  ];
  return characters[index][prop];
}
console.log(getAnything(1, "firstName"));
console.log(getAnything(2, "age"));

//Josh   (Index 1 : Josh Smith 30)
//18     (Index 2 : Jess Bath 18)

function getIds() {
  return [
    { firstName: "Peter", lastName: "Williams", age: 24 },
    { firstName: "Josh", lastName: "Smith", age: 30 },
    { firstName: "jess", lastName: "Bath", age: 18 }
  ];
}

function getPropOfCharecter(index, prop) {
  let characters = getIds();
  return characters[index][prop];
}

function getCharactersSize() {
  let characters = getIds();
  return characters.length;
}

console.log(getPropOfCharecter(2, "lastName"));
console.log("The list of characters is ", getIds());
console.log("The size of characters is", getCharactersSize());

// Bath
// The list of characters is  – [{firstName: "Peter", lastName: "Williams", age: 24}, {firstName: "Josh", lastName: "Smith", age: 30}, {firstName: "jess", lastName: "Bath", age: 18}] (3)
// The size of characters is – 3
