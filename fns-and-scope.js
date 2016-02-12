//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
var isTyler = function(name){
	if(name === 'Tyler'){
		return true;	
	}else{
		return false;
	}	
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
var getName = function(){
	var name = prompt("Whats your name?");
	return name;
}
getName();
//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
var welcome = function(){
	alert("Welcome " + getName());
}
welcome();


//Next problem

//What is the difference between arguments and parameters?

  parameters are used in the definition of a function 
  whereas agruments are used when funciton is invoked


//Next problem


//What are all the falsy values in JavaScript and how do you check if something is falsy?

 null, undefined, NaN, 0, false, ''



//Next Problem



//Create a function called myName that returns your name

  var myName = function(name){
  	return name;
  }
  myName("justin");
  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName("justin"));

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

var outerFn = function(){
	return function(){
		return "justin";
		
	}
}


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();
  //Code Here

//Now invoke innerFn.
innerFn();