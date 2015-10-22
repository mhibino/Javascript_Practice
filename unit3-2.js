'use strict'

var myData = [1,2,3,4,5]

console.log(modifyArray(myData,addOne)) // "2,3,4,5,6"

console.log(modifyArray(myData,sayHello))

function modifyArray(array, callback) {
	if (callback) {
	var result = '';
		for ( var i = 0; i < array.length; i++) {
			result += callback(array, i) + ', ';
		}
		return result;
	} 
	else {
		return array;
	}
}

function addOne(arr, item) {
	return arr[item] + 1;
}

function sayHello(arr, item) {
	return "hello " + arr[item];
}

function map (arr, callback) {
	var mapped = [];
	for ( var i = 0; i < arr.length; i++) {
		mapped.push(callback(arr[i])); 
	}
	return mapped;
}

var times2 = map([1, 2, 3], function(value) { // returns [2,4,6]
    return value *= 2;
});
console.log(times2);

var person1 = {
	name: 'Jamie',
	birthday:  new Date(1991, 10, 12),
	job: 'Software Developer',
	location: 'SF',
	reset: function() {
		for (var prop in newObject) {
			if (prop !== 'reset') {
				newObject[prop] = undefined;
			}
		}
	}
}
// for (var prop in newObject) {
// 	console.log(newObject[prop]);
// }





var number = 50000;


(function myProgram(){ //is run immediately

    var number = 100;
    "use strict"   //___strict mode

    function changeNumber() {
        number = 200;
        number += 100;
        return number;

    }

    changeNumber() 

console.log("internal number variable is " + number) // 300

}()); //invocation is done here

console.log( "global number variable is " + number) // 5000
	







