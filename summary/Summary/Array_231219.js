// array //

// **************** add array ****************

function addCharacter(newcharactrer) {
  let characters = ["Donald", "Boris", "May"];
  characters.push(newcharactrer);
  return characters;
}
console.log(addCharacter("KimJeongEn"));

//  ["Donald", "Boris", "May", "KimJeongEn"]

function editCharacter(newcharactrer) {
  let characters = ["Donald", "Boris", "May"];
  characters.unshift(newcharactrer);
  return characters;
}
console.log(addCharacter("KimJeongEn"));

//  ["KimJeongEn", "Donald", "Boris", "May"]

function editCharacter(newcharactrer) {
  let characters = ["Donald", "Boris", "May"];
  characters[1] = newcharactrer;
  return characters;
}
console.log(addCharacter("KimJeongEn"));

//  ["Donald", "KimJeongEn", "May"]

function editCharacter(newcharactrer, index) {
  let characters = ["Donald", "Boris", "May"];
  characters[index] = newcharactrer;
  return characters;
}
console.log(addCharacter("KimJeongEn", 2));

//  ["Donald", "Boris", "KimJeongEn"]

//********* remove *********

function removeLastCharacter(newcharactrer) {
  let characters = ["Donald", "Boris", "May"];
  characters.pop();
  return characters;
}
console.log(removeLastCharacter());

//  ["Donald", "Boris"]

function removeFirstCharacter(newcharactrer) {
  let characters = ["Donald", "Boris", "May"];
  characters.shift();
  return characters;
}
console.log(removeFirstCharacter());

//  ["Boris", "May"]

function deletBoris(newcharactrer, index) {
  let characters = ["Donald", "Boris", "May"];
  characters.splice(1, 1);
  return characters;
}
console.log(deletBoris());

//  ["Donald", "KimJeongEn"]

function deletBorisAndMay(newcharactrer, index) {
  let characters = ["Donald", "Boris", "May"];
  characters.splice(1, 2);
  return characters;
}
console.log(deletBorisAndMay());

//  ["Donald"]

// ************* find *************
function existsCharacter(searchCharacter) {
  let characters = ["Donald", "Boris", "May"];
  let exists = characters.find(character => {
    return character === searchCharacter;
  });
  if (exists) {
    return characters + " : It has '" + searchCharacter + "'";
  } else {
    return "Sorry, character not found";
  }
}
console.log(existsCharacter("Boris"));
//Donald,Boris,May : It has 'Boris'

//****************** filter ******************

//how many the character exist in the array

function howManyTiesCharacterIsListed(searchCharacter) {
  let characters = ["Donald", "Boris", "May", "Donald"];
  let matchingCharacters = characters.filter(character => {
    return character.toLowerCase() === searchCharacter.toLowerCase();
  });
  return matchingCharacters;
}
console.log(howManyTiesCharacterIsListed("Donald"));

//  ["Donald", "Donald"]

function howManyTiesCharacterIsListed(searchCharacter) {
  let characters = ["Donald", "Boris", "May", "Donald"];
  let matchingCharacters = characters.filter(character => {
    return character.toLowerCase() === searchCharacter.toLowerCase();
  });
  return matchingCharacters.length;
}
console.log(howManyTiesCharacterIsListed("Donald"));
console.log(howManyTiesCharacterIsListed("Boris"));
console.log(howManyTiesCharacterIsListed("May"));

//  2
//  1
//  1

//
// ******************* map *******************
function getCharactersInCapitals(searchCharacter) {
  let characters = ["Donald", "Boris", "May"];
  let capitalCharacters = characters.map(character => {
    return character.toUpperCase();
  });
  return capitalCharacters;
}
console.log(getCharactersInCapitals());

//["DONALD", "BORIS", "MAY"]

// same result but simplfied

function getCharactersInCapitals(searchCharacter) {
  let characters = ["Donald", "Boris", "May"];
  return characters.map(character => character.toUpperCase());
}
console.log(getCharactersInCapitals());

//["DONALD", "BORIS", "MAY"]
