//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr){
	for(var i = 0; i < arr.length; i++){
    	if (arr[i] < 0){
        	arr[i] = 'big';
        }
    }
  		return arr;
}
console.log (biggieSize([2,4,-1,-4]))


//Print Low, Return High - Create a function that takes in an array of numbers.  
//The function should print the lowest value in the array, and return the highest value in the array.

function minMax(arr){
	var max = 2;
	var min = -2;

	for(var i = 0; i < arr.length; i++){
    	if(arr[i] > max){
           max = arr[i]
           }
      	if(arr[i] < min){
        	min = arr[i]
        }
    }
  return [min,max];
}
console.log (minMax([2,5,4,8,-3,-6,8,16,18,-5]))


//Print One, Return Another - Build a function that takes in an array of numbers.  
//The function should print the second-to-last value in the array, and return the first odd value in the array.

function printReturn(arr){
  
    return [arr[1], arr[arr.length-2]];
  }
  console.log (printReturn([2,-4,5,8,7,]))

//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  
//Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision (arr){
	for(var i = 0; i < arr.length; i++){
      	arr[i] = arr[i] * 2;
    }
  return arr;
}
console.log(doubleVision([2,4,6], ))


//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
//Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function positiveCount(arr){
    var count = 0;
for(i = 0; i < arr.length; i++){
      if(arr[i] > 0){
      count = count + 1;
      }
}
    arr.push(count);
    return arr;
}
console.log (positiveCount([2,4,5,7]))

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
//Every time the array has three evens in a row, print "Even more so!".

function EvOd(a) {
  EvenCount = 0;
  OddCount = 0;
  for (var i = 0; i < a.length; i++) {
      if (a[i] % 2 === 0) {
          EvenCount++;
          if (EvenCount === 3) {
              console.log("Even more so!");
          }
      } else {
          OddCount++;
          if (OddCount === 3) {
              console.log("That's odd!");
          }
      }
  }
}
y = ([1, 2, 3, 5, 7, 8, 9, 11, 22, 14, 0, 4, 5]);
console.log(EvOd(y));



//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc). 
 //Afterward, console.log each array value and return arr.

 function incrementStuff(arr){
	for(var i = 1; i < arr.length; i+=2){
    		arr[i] = arr[i] + 1
    }
  return arr;
}
console.log (incrementStuff([1,2,3,4,5,6,7,8,9,10,11,12,13]))

 //Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
 //Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
 //For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

 function strToNum(arr){
  
	for(var i = 0; i < arr.length; i++){
 			if(arr[i] < "pizza"){
               arr[i] = 5
               }
      		if(arr[i] > "dojo"){
               arr[i] = 4
               }
    }    
  return arr;
}
console.log (strToNum(["pizza",-1,"pizza",-5,8, "dojo", "dojo"]))


 //Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  
 //Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

 function addSeven (arr){
	for(var i = 0; i < arr.length; i++){
      	arr[i] = arr[i] + 7;
    }
  return arr;
}
console.log(addSeven([2,4,6], ))

 //Reverse Array - Given an array, write a function that reverses its values, in-place.  
 //Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  
 //(Hint: you'll need to swap values).

 function swap(arr){
	var temp = arr[0];
  	arr[0] = arr[arr.length - 1];
  	arr[arr.length - 1] = temp;
  	return arr;
}
console.log (swap([2,4,6,8,10]))

 //Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). 
 //Given [1,-3,5], return [-1,-3,-5].

 function Neg(arr) {
    //your code here
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i]= arr[i] * -1
        }
    }
    return arr; 
}
console.log(Neg([-5,-5,6,7,3]))

 //Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
 //If no array values are "food", then print "I'm hungry" once.
 
 function alwaysHungry(arr){
    for(var i = 0; i < arr.length; i++){
       if (arr[i] == "food") {
         console.log("yummy");
 }	 else {
         console.log("I'm Hungry");
 }
    }
 }
 console.log(alwaysHungry([2,"food",4,5,6,"food"]))


 //Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc. 
  //Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  
  //No need to return the array this time.


  function swap(arr){
	var temp = arr[0];
  	arr[0] = arr[arr.length - 1];
  	arr[arr.length - 1] = temp;
  	return arr;
}
console.log (swap([2,4,6,8,10]))


  //Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  
  //For example, scaleArray([1,2,3], 3) should return [3,6,9].

  function scaleArray (arr){
	for(var i = 0; i < arr.length; i++){
      	arr[i] = arr[i] * 3;
    }
  return arr;
}
console.log(scaleArray([2,4,6], ))
