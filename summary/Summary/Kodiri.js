/* ***********************************************************

String

*********************************************************** */

/*   ******************** String 1 ******************** */

function returnString() {
  return "Hello World!";
  // when you make a function you need an action! which in this case 'return'
}

returnString();
// "Hello World!"

/*   ******************** String 2 ******************** */

function returnUser(userName) {
  return "Welcome to Kodiri " + userName;
  return `Welcome to Kodiri ${userName}`;
}

returnUser("Tom");
// "Welcome to Kodiri Tom"

/*   ******************** String 3 ******************** */

function returnNames(firstName, lastName) {
  return `Welcome ${firstName} ${lastName}!`;
}

returnNames("Will", "Smith");
// "Welcome Will Smith!"

/*   ******************** String 4 ******************** */

function returnDatas(firstName, age, isSexy) {
  return `Hello ${firstName}, you are ${age}, are you sexy? ${isSexy}`;
}

returnDatas("Tom", 28, true);
// "Hello Tom, you are 28, are you sexy? true"

/*   ******************** String 5 ******************** */

// single quotes, double quotes, backticks
// stick with the same one

/* ***********************************************************

Number

*********************************************************** */

//   ================== Number 1 (round)===================

function round(value) {
  return Math.round(value);
}

round(4.6); // round to the closest integer
// 5
round(4.4);
//4

/*   ================== Number 2 (floor)=================== 
 : returns the largest integer less than or equal to a given number */

function floor(value) {
  return Math.floor(value);
}

floor(5.9);
//5
floor(5.1);
//5

/*   ================== Number 3 (ceil)===================
  : rounds a number up to the next largest whole number or integer.    */

function ceil(value) {
  return Math.ceil(value);
}

ceil(0.1);
// 1
ceil(-7.9);
// -7

//   ================== Number 4 (min)===================

function minNum(value1, value2, value3) {
  return Math.min(value1, value2, value3);
}

minNum(-6, 2, 8);
// -6

//   ================== Number 4 (max)===================

function maxNum(value1, value2, value3) {
  return Math.max(value1, value2, value3);
}

maxNum(2, -9, 4);
// 4

/* ***********************************************************

conditional : if-else

*********************************************************** */

/*   ******************** if-else 1 ******************** */

function isAGoodScore(score) {
  if (score >= 50) {
    return "That is a good score!";
  } else {
    return "Keet training..";
  }
}

isAGoodScore(49);
//'Keet training..'
isAGoodScore(50);
//'That is a good score!'

/*   *************** if-else 2 (MAKE EVEN) *************** */

function makeEven(num) {
  if (!isEven(num)) {
    // or (isEven(num) === false)
    return 2 * num;
  }
  return num;
}

function isEven(num) {
  return num % 2 === 0;
}

/*   ******************** if-else 3 ******************** */

function howGoodAmI(score1, score2) {
  if (score1 >= 50 && score2 >= 50) {
    return "Great Job!";
  } else if (score1 >= 50 && score2 < 50) {
    return "Getting better!";
  } else if (score1 < 50 && score2 >= 50) {
    return "Getting worse!";
  } else {
    return "You need to improve";
  }
}

howGoodAmI(4, 23);
//  'You need to improve'   <= default value
howGoodAmI(33, 80);
//  'Getting worse!'
howGoodAmI(77, 24);
//  'Getting better!'
howGoodAmI(80, 63);
//  'Great Job!'

/*   ************* if-else 4 (Truthy / falsy) ************* */

function willGetUndefined(user) {
  return `Welcome ${user.firstName} ${user.lastName}`;
}

willGetUndefined({
  firstName: "Will"
});

// "Welcome Will undefined"

function butWithIfStatement(user) {
  if (user.lastName) {
    // if condition is valuates for truthy / falsy
    return `Welcome ${user.firstName} ${user.lastName}`;
  } else {
    return `Welcom ${user.firstName}`;
  }
}

butWithIfStatement({
  firstName: "Will",
  lastName: "Smith"
});

// 'Welcome Will Smith'

/*   ************** if-else 5 : use {} ************** */

function tripleOddNumber(num) {
  if (num % 2 !== 0) {
    num = num * 3;
    return num; // if more than 1 line then srround the line with {}
  } else {
    return num; // no need to wrap if there's a single line but better wrap. For a good practice
  }
}
tripleOddNumber(3);
// 9

tripleOddNumber(2);
// 2

/* ***********************************************************

conditional : ternary operator ? :

*********************************************************** */

//   ================== ternary operator 1 ===================

//         if statement example

function ifExample(score) {
  if (score >= 50) {
    return "Good Job!";
  } else {
    return "That is No No";
  }
}

ifExample(50); // 'That is a good score!'

//         ternary operator example

function ternaryEx(score) {
  return score >= 50 ? "Great!" : "That is No No";
} // return (condition) ? if true do this : else do this

ternaryEx(50); // 'Great!'

//   ================== ternary operator 2 ===================

function ternaryEx2(score) {
  return !(score >= 50) ? "That is No No" : "Great!"; // *Wrap the condition with ()!!
} // return (condition) ? if not do this : else do this

ternaryEx2(50); // 'Great!'

//   ============ ternary operator 3 : multiple condition =============

function multipleTernary(score1, score2) {
  return score1 < 50 && score2 < 50
    ? "Is it your best?"
    : score1 < 50 && score2 >= 50
    ? "You can do better"
    : score1 >= 50 && score2 < 50
    ? "Getting better"
    : "Brilliant!";
}

multipleTernary(77, 69);
//Brilliant

function theSameStatement(score1, score2) {
  if (score1 < 50 && score2 < 50) {
    return "Is it your best?";
  } else if (score1 < 50 && score2 >= 50) {
    return "You can do better";
  } else if (score1 >= 50 && score2 < 50) {
    return "Getting better";
  } else {
    return "Brilliant!";
  }
}
theSameStatement(55, 63);

//   =========== ternary operator 4  : multiple condition ============

function thisPersonsAge(user) {
  return user.age ? "I know" : "I don't know";
}

thisPersonsAge({
  firstName: "Prince",
  lastName: "Philip",
  age: 98
});

//   'I know'  => because  'age' is valid
thisPersonsAge({
  firstName: "Prince",
  lastName: "Philip"
});

// 'I don't know'

/* ***********************************************************

Object

*********************************************************** */

/*   ******************** Object 1 ******************** */

function howManyGoals(player) {
  return player.eplGoals; //   <== Highlight
}
howManyGoals({
  firstName: "Heung-Min",
  lastName: "Son",
  age: 27,
  eplGoals: 47
});

// 47

/*   ******************** Object 2 ******************** */

function sonnyGoals(player) {
  return player.epl.assists; //   <== Highlight
}
sonnyGoals({
  firstName: "Heung-Min",
  lastName: "Son",
  age: 27,
  epl: {
    appearances: 146,
    goals: 47,
    assists: 26
  }
});

// 26

/*   ******************** Object 3 ******************** 
  : dynamically choose the value by using [] */

function goalsSquareBracket(player, prop) {
  return player.epl[prop]; //   <== Highlight
}
goalsSquareBracket(
  {
    firstName: "Heung-Min",
    lastName: "Son",
    age: 27,
    epl: {
      appearances: 146,
      goals: 47,
      assists: 26
    }
  },
  "goals"
);

// 47

/*   ************ Object 4 : get the keys ************ */

function getTheKeys(player) {
  return Object.keys(player); //   <== Highlight
}
getTheKeys({
  firstName: "Heung-Min",
  lastName: "Son",
  age: 27,
  epl: {
    appearances: 146,
    goals: 47,
    assists: 26
  }
});

/*   ************ Object 5 : get the values ************ */

function getTheValues(player) {
  return Object.values(player); //   <== Highlight
}
getTheValues({
  firstName: "Heung-Min",
  lastName: "Son",
  age: 27,
  epl: {
    appearances: 146,
    goals: 47,
    assists: 26
  }
});

/* ***********************************************************

Array

*********************************************************** */

/*   ===================== Array 1 : Find 1 ===================== */ 
// : will stop at the first correct element

function findNegativeNum(nums) {
  return nums.find(function(num) {
    // === nums.find((num) => {   : common callback function
    return num < 0;
  });
}

findNegativeNum([1, 6, -8, 3, -3]);

// -8  (first value of the condition then will stop)
// The same result but simpler way

function findNegativeNum(nums) {
  return nums.find(num => num < 0);
}

findNegativeNum([1, 6, -8, 3, -3]);
// -8

/*   ===================== Array 1 : Find 2 ===================== */

function bestPlayer(players, score) {
  return players.find(player => player.goals >= score);
}

bestPlayer(
  [
    { name: "Sonny", goals: "5" },
    { name: "Dele", goals: "6" },
    { name: "Harry", goals: "11" }
  ],
  10
);

//{name: "Harry", goals: "11"}

function bestPlayer(players, score) {
  return players.find(player => player.goals >= score);
}

bestPlayer(
  [
    { name: "Sonny", goals: "5" },
    { name: "Dele", goals: "6" },
    { name: "Harry", goals: "11" }
  ],
  15
);

//undefine

/*   ===================== Array 1 : Find 3 ===================== */

function findBestPlayer1(players, score) {
  let goodPlayer = players.find(player => player.goals >= score);
  return goodPlayer.name;
}
// The same function                            ?????? Question : this is harder to debug?
function findBestPlayer2(players, score) {
  return players.find(player => player.goals >= score).name;
}

findBestPlayer1(
  [
    { name: "Dele", goals: "6" },
    { name: "Sonny", goals: "5" },
    { name: "Harry", goals: "11" }
  ],
  5
);

// 'Sonny'

/*   ===================== Array 1 : Find 4 ===================== */

function findBestPlayer(players, score) {
  let goodPlayer = players.find(player => player.goals >= score);
  // return goodPlayer ? goodPlayer.name : 'There is no player with that score yet'
  if (goodPlayer === undefined) {
    return "There is no player with that score yet";
  } else {
    return goodPlayer.name;
  }
}

findBestPlayer(
  [
    { name: "Sonny", goals: "5" },
    { name: "Dele", goals: "6" },
    { name: "Harry", goals: "11" }
  ],
  15
);

// 'There is no player with that score yet'

/*   ===================== Array 1 : Find 5 ===================== */

function activePlayer(players) {
  return players.find(player => player.isActive === false).name; // ===  !player.isActive
}
activePlayer(
  [
    { name: "Sonny", goals: "5", isActive: true },
    { name: "Dele", goals: "6", isActive: true },
    { name: "Harry", goals: "11", isActive: false }
  ],
  15
);

// 'Harry'

/*   ******************** Array 2 : Filter 1 ******************** */  
//: filt all element in the given argument

function filterNegativeNum(nums) {
  return nums.filter(function(num) {
    //=== return nums.filter((number) => {
    return num < 0; //=== return nums.filter(num => num < 0);
  });
}
filterNegativeNum([-3, 6, 2, -5, 1, 9, -39]);

/*   ******************** Array 2 : Filter 2 ******************** */

function filterLowerCases(letters) {
  return letters.filter(letter => {
    debugger;
    return letter === letter.toLowerCase();
    // ===return letters.filter(letter => leter === letter.toLowerCase());
  });
}
// ===return letters.filter(letter => leter === letter.toLowerCase());

filterLowerCases(["A", "b", "c", "D", "E", "f"]);

/*   ******************** Array 2 : Filter 3 ******************** */
//?????Question????    why argument.name   doesn't call the name value?
function filterActiveUser(users) {
  return users.filter(user => user.isActive === true).name; 
  //  return users.filter(user => user.isActive === true).name;    Doesn't work
} //=> user.isActive);   <- should work as well

filterActiveUser([
  { name: "Sonny", score: "5", isActive: true },
  { name: "Dele", score: "6", isActive: false },
  { name: "Harry", score: "11", isActive: false }
]);

//

/*   ******************** Array 2 : Filter 4 ******************** */

function countActiveUser(users) {
  return users.filter(user => user.isActive).length;
  /* 
  let activeUsers = users.filter(user => user.isActive);
  return activeUsers.length;  
  */
}

countActiveUser([
  { name: "Sonny", score: "5", isActive: true },
  { name: "Dele", score: "6", isActive: false },
  { name: "Harry", score: "11", isActive: false }
]);

/*   ******************** Array 2 : Filter 5 ******************** */

function filterGoodPlayer(players, score) {
  return players.filter(player => player.score >= score);
}
filterGoodPlayer(
  [
    { name: "Sonny", score: "5", isActive: true },
    { name: "Dele", score: "6", isActive: false },
    { name: "Harry", score: "11", isActive: true }
  ],
  6
);
