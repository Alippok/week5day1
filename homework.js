//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number
"cat"; //string
true; //boolean
[]; //object
{}; //object
1.1; //number
undefined; //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[];//true
{};//true
undefined;//false
"";//false
0;//false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 2134;
//3.2 Assign a variable that is a string
var string = "gooseberry";
//3.3 Assign a variable that is a boolean
var boolean = 1 < 0;
//3.4 Assign a variable that is an object
var array = ["banana", "pear", "orange"];

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var truthy = function(statement){
  if (statement) {
    return "hello";
  }
  return "bye";
}

console.log(truthy(1>0))


//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstAnimal = animals.shift();
//5.2. Assign the last element to a variable
var lastAnimal = animals.pop();
//5.3. Assign the length of an array to a variable
var length = animals.length;
//5.4. Add an item to the end of the array
animals.push("hippo");
//5.5. Add an item to the start of the array
animals.unshift("giraffe");
//5.6. Assign the index of hedgehog to a variable
function indexFind(animal){
  return animal === "hedgehog"
}

var hedgehogIndex = animals.findIndex(indexFind)
console.log(hedgehogIndex);

//or
var hedgehogIndex = animals.indexOf("hedgehog");
console.log(hedgehogIndex);

//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["carrot", "pea", "mangetout", "brocolli", "courgette" ]
//6.2 Loop over the array and write to the console using a "while"
function looper (array){
  var i = 0;
  while( i < array.length ){
    console.log(array[i]);
    i++;
  }
}
looper(vegetables);
//6.3 Loop again using a "for" with a counter
function looperTwo (array){
  for ( i=0; i < array.length; i++){
    console.log(array[i]);
  }
}
looperTwo(vegetables);
//6.4 Loop again using a "for in"
for (var vegetable of vegetables){
  console.log(vegetable);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',  
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
var sum = function(array){
  var totalCash = 0;
    for (i=0; i < array.length; i++){
     totalCash += array[i]["amount"];
}
  return totalCash;
}
console.log(sum(accounts));
//7.2 Find the name of the account with the largest balance
//7.3 Find the name of the account with the smallest balance
var tracker = [];

function gatherAmounts(){
    for (i=0; i < accounts.length; i++){
      tracker.push(accounts[i]["amount"]);
    }
  return tracker
  }

function compare( a, b ){
 return a - b;
}

gatherAmounts()
tracker.sort(compare);

var largestAmount = tracker[length];
var smallestAmount = tracker[0];

function accountSearch (amount){
  for ( i=0; i < accounts.length; i++ ){
    if (accounts[i]["amount"] === amount)
      return (accounts[i]["name"]);
    }
}

console.log(accountSearch ( smallestAmount ));

console.log(accountSearch ( largestAmount ));

//7.4 Calculate the average bank account value
function averageValue(array){
  var amount = sum(array) / array.length;
  return Math.round( amount * 100 ) / 100
}

console.log(averageValue(accounts));
//7.5 Find the value of marcs bank account
//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food