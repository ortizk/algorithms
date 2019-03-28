// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

// Examples:

// //  returns test_controller
// toUnderscore('TestController');

// // returns movies_and_books
// toUnderscore('MoviesAndBooks');

// // returns app7_test
// toUnderscore('App7Test');

// // returns "1"
// toUnderscore(1);

// iterate through string check if char is upper
// if upper make lower and push underscore
// account for numbers as well

// array.splice(index, howmany, item1, ....., itemX)

const toUnderscore = (string) => {
	let snake_case = [];
	string = string.split('')
	for(let i = 0;i < string.length;i++){
		if(isNaN(string[i]) == false){
			snake_case.push(string[i])
		}else if(string[i] == string[i].toUpperCase()){
			snake_case.push("_",string[i].toLowerCase())
		}else {
			snake_case.push(string[i])
		}
	}
	snake_case.shift()
	return snake_case.join('')
}

console.log(toUnderscore('Movies7AndBooks'))





