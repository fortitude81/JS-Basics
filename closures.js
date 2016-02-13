//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner= outer();

//Once you do that, invoke inner.

inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  
  function callF(number){
    var number = '435-215-9248';  //added phone number here to satisfy parameter
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get '435-215-9248' in your console.
var callJake = callFriend();  //assigned outer function to new function
console.log(callJake('435-215-1111'));   //invoked new function, passed in argument
// this would also work ->
// var callFriend = function(){
//  var friend = 'Jake';
//  function callF(number){
//    return 'Calling ' + friend + ' at ' + number;
//  }
//  console.log(callF('435-215-1111'));
// };
// callFriend();

//Next Problem


/*
  Write a function called makeCounter that makes the following code work properly.
*/
var makeCounter = function(){
    var counter = 1;          //start with a counter of 1
    return function() {       //then nedd a function to increment
      return counter++;       //each invokation, increment by 1
    };
   }

  var count = makeCounter();  //assigning to function to new variable
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts the first function as it's first parameter. The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
*/
var codeLove = function(){
  return 'I love code';
}
//var codeHate  = function (){
//  return 'whatever';
//}
var codeFriend = function(func) {  //func is just a place holder
  var first = true;  //flag
  return function(){
    if (first){
      first = !first;
      return func();  //codeLove invoked
    }
      return null;
  } 
};
var codeEcho = codeFriend(codeLove);  //codeEcho is the inner 3rd func
//var codeEcho2 = codeFriend(codeHate);
codeEcho();
  //Code Here

//Next Problem



/*
  Now, similar to the last problem, write a function cao plled 'fnCounter' that accepts twarameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
var fnCounter = (function(), N) {
  for (var i = 0; i < N; i++) {
    return 'stop';
  };
}

fnCounter(6);


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){    // 2 parameters here, function timer
          console.log( i );           
      }, i*1000 );                     // and second paramter i*1000
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //5000


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //wrong


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

//Code Here
var counter = function() {  
  for(var i=1; i <= 5; i++) {
    setTimeout(function(x) {  
      return function() {   //anonymous function wrapped inside SetTimeout function
        console.log(x);
      }; 
      }(i), 1000  * i);
      }
    }
  }
counter();

//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


var funcArray = [];
var func = function (num){
  return (function(){ return num;})
}
for (var i = 0; i < 6; i++) {
  funcArray.push(func(i))
};
