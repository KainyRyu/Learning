/* ***********************************************************

Function

*********************************************************** */

/*   ******************** Function 1 ******************** */

function isBeginnerActivePlayer(player) {
  return isBeginnerPlayer(player) && isActivePlayer(player);
}
function isBeginnerPlayer(player) {
  return player.isBeginner;
}

function isActivePlayer(player) {
  return player.isActive;
}
isBeginnerActivePlayer({
  name: "Kainy",
  isBeginner: true,
  isActive: true
});
//   true

/*   ******************** Function 2 ******************** */

function getScore(player) {
  return getLastScore(player);
}

function getLastScore(player) {
  debugger;
  return player.scores[player.scores.length - 1];
}
getScore({
  name: "Kainy",
  isBeginner: true,
  isActive: true,
  scores: [75, 68, 94]
});

//

/*   ******************** Function 3 ******************** */

function whereIsHefrom1(country) {
  return country.name;
}
whereIsHefrom1((name: "Korea"));

function whereIsHefrom2(country) {
  return country.name;
}
whereIsHefrom2({ name: "Korea" });

function whereIsHefrom3(countryfn) {
  return countryfn();
}
whereIsHefrom3(function() {
  // whereIsHefrom(() => { return 'Korea';})
  return "Korea"; // whereIsHefrom(() => 'Korea')
});

// 'Korea'

/*   ******************** Function 4 ******************** */

function isGoodAvg(scores) {
  let avgScore = getAvgScore(scores);
  let isGoodScore = checkAvgScore(avgScore);
  return isGoodScore; // === return checkAvgScore(getAvgScore(Scores)) =>simpler but complicated to read
}

function getAvgScore(scores) {
  let total = scores.reduce((total, score) => total + score);
  return total / scores.length;
}

function checkAvgScore(avgScore) {
  return avgScore >= 5; // 5.2
}

isGoodAvg([4, 7, 9, 2, 4]);
// true

/*   ******************** Function 5 ******************** */

function checkAvgTem(temperatures) {
  let roundedTems = getRoundedTems(temperatures);
  let avgTem = getAvgTem(roundedTems);
  return evaluateHowGoodTemperatureIs(avgTem);
}
function getRoundedTems(temperatures) {
  return temperatures.map(temperature => Math.round(temperature));
}

function getAvgTem(temperatures) {
  let total = temperatures.reduce((total, temperature) => {
    return total + temperature;
  });
  return total / temperatures.length;
}

function evaluateHowGoodTemperatureIs(temperatures) {
  return temperature >= 15
    ? "Awesome!"
    : temperature >= 7
    ? "Fair"
    : "Terrible";
}

checkAvgTem([5, 10, 14, 7]);
// 'Terrible

/* ============================================================

Types

============================================================ */

/*   ==================== Type : String? ==================== */

function isTypeSting(x) {
  return typeof x === "string";
}

isTypeSting("hello");

//true

/*   ==================== Type : Boolean? ==================== */

function isTypeBoolean(x) {
  return typeof x === "boolean";
}

isTypeBoolean(false);

//ture

/*   ==================== Type : Number? ==================== */

function isTypeNumber(x) {
  return typeof x === "number";
}
isTypeNumber(-0.2355);

//true

//isTypeNumber('5'); => false

/*   ==================== Type : Array? ==================== */

function isTypeArray(x) {
  return Array.isArray(x); // typeof doesn't work for array
}

isTypeArray(["Hi", "Hello"]);

//  true

/*   ==================== Type : Object? ==================== */

function isTypeObject(x) {
  return typeof x === "object";
}

isTypeObject({ name: "Tom" });

// true

//isTypeObject(['Hi', 'Hello']);   =>  true   because js treats array and object the same

// *******   Solution   *******

function isTypeRealObj(x) {
  return typeof x === "object" && !Array.isArray(x);
}

isTypeRealObj(["hello", 325]); //false
isTypeRealObj({ name: "Tom " }); //true

/* ***********************************************************

For...in

*********************************************************** */

/*   ******************** For...in 1 ******************** */

function getIndexes(string) {
    let indexes = [];
    for(let index in string) {
        indexes.push(index)  //indexes.push(string[index])  //  ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
    }
    return indexes
}

getIndexes('hello world')

//["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

/*   ******************** For...in 2 Obj******************** */

function getKeys(obj) {
    let keys = [];
    for(let key in obj) {
        keys.push(key)
    }
    return keys
}

getKeys({
    firstName : 'Dele',
    lastName: 'Alli',
    age: 23
})

// ["firstName", "lastName", "age"]

// When you use for in with Obj you'll get keys

/*   ******************** For...in 3 Arr ******************** */

function whatDay(arr) {
    let indexes = [];
    for (le;t index in arr) {
        indexes.push(index)
    }
    return indexes
}

whatDay(['Monday', 'Tuesday', 'Wednesday', 'Thursday'])

// When you use for in with Arr you'll get numbers of string

/*   ******************** For...in 4 ******************** */

function getCharacters(string) {
    let characters = [];
    for(let index in string) {
        characters.push(string[index]);
    }
    return characters;
}
getCharacters('Hello');

//["H", "e", "l", "l", "o"]

/*   ******************** For...in 5 ******************** */

function getValues(obj) {                        //???????Quedstion :  How come do i get the values???
    let  keys = [];
    for(let key  in obj) {
        keys.push(obj[key])
    }
    return keys
}

getValues({
    firstName : 'Dele',
    lastName: 'Alli',
    age: 23
})

//  ["Dele", "Alli", 23]
/* ============================================================

For...of

============================================================ */


/*   ==================== For...of 1 ==================== */

function getCharactersForOf(string) {
    let characters = [];
    for(let value of string) {
        characters.push(value)
    }
    return characters
}

getCharactersForOf('Hello World');

// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
// ** for..in gets the index numbers /  for..of gets indivisual string 


/*   ==================== For...of 2 ==================== */

function getCapitalValues(string) {
    let capitals = []
    for(let char of string) {
        capitals.push(char.toUpperCase())
    }
    return capitals

}

getCapitalValues('Welcome to for of')

//["W", "E", "L", "C", "O", "M", "E", " ", "T", "O", " ", "F", "O", "R", " ", "O", "F"]

// capitals.push(char + '!') ==> ["W!", "e!", "l!", "c!", "o!", "m!", "e!", " !", "t!", "o!", " !", "f!", "o!", "r!", " !", "o!", "f!"]

/*   ==================== For...of 3 ==================== */

function getReverseString(string) {
    let values = []
    for(let char of string) {
        values.push(char)
    }
    return values.reverse();
}

getReverseString('Hello World');

// ["d", "l", "r", "o", "W", " ", "o", "l", "l", "e", "H"]

/*    The Same
function getReverseString(string) {
    let values = []
    for(let char of string) {
        value s.unshift(char)
    }
    return values;
} 
*/

/*   ==================== For...of 4 ==================== */

function getCharacters(x) {
    let characters = [];
    for(let elem of x) {
        for(let char of elem) {
            characters.push(char);
        }
    }
    return characters;
}
getCharacters(['hello', 'world'])

//["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]

/*   ==================== For...of 5 ==================== */

function isThisIterable(string){
    return typeof string === 'string' || Array.isArray(string);
}

isThisIterable('Hello')

//true
// isThisIterable(['Hello', 'World'])   => true

/* ***********************************************************

Dates

*********************************************************** */

/*   ******************** Dates 1 : is a valid date ******************** */

function isDate(x) {
    return x instanceof Date;
}
isDate(new Date());

// true
/*
isDate('string')  false
isDate(39)   false
isDate('2020-01-01')   false
*/

/*   ******************** Dates 2 ******************** */

function getDay(dateStr) {
    let date = new Date(dateStr);
    return date.getDate();  // 
}
getDay('2020-01-02')
// 2

/*   ******************** Dates 3 ******************** */

function retrieveDayOfTheWeek(date) {
    return date.getDay();
}
retrieveDayOfTheWeek(new Date('2020-01-01'));

// 3   :  Wednesday 

/*   Days
0: Sunday
1: Monday
...
6: Saturday
*/

function retrieveDayOfTheWeek(date) {
    let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return days[date.getDay()];
}
retrieveDayOfTheWeek(new Date('2020-01-01'));

// 'Wednesday'

/*   ******************** Dates 4 ******************** */

function addMinutes(date, minutes) {
    date.setMinutes(date.getMinutes() + minutes);
    return date.getMinutes();
}

addMinutes(new Date('2020-01-01 12:05:00'), 20);

// 25

/*   ******************** Dates 5 ******************** */

function getTime(date) {
    let hours = normalise(date.getHours());
    let minutes = normalise(date.getMinutes());
    let seconds = normalise(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}
function normalise(dateToken) {
    return dateToken < 10 ? `0${dateToken}` : `${dateToken}`
}

getTime(new Date('2020-01-10 01:10:05'));

//"01:10:05"
