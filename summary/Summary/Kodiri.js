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