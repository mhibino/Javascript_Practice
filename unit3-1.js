
// ==========================================================================================
// ======================== Practice Functions Unit 3 ------ Lesson 1 =======================
// ==========================================================================================

function complementGiver (array, string) {
	var complementArr = [];
	for ( var i = 0; i < array.length; i++) {
		complementArr.push(array[i] + string);
	}
	return complementArr;
}

console.log(complementGiver(['Bob','Brenda','Ishmael',"Earl"], " is great!"));


var count = 0;

function counter () {
	return count += 1;
}

console.log(counter())
console.log(counter())


