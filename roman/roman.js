//take a roman numeral number and convert it to a regular integer

//first make a library with key value pairs representing letters and their values
// reverse interate through given roman numeral and check if the following character is higher or lower than the one you're on.
// if next char is lower than current, subtract 
// if next char is higher than current, add

const lib = {
	'I': 1,
	'V': 5, 
	'X': 10, 
	'L': 50, 
	'C': 100, 
	'D': 500, 
	'M': 1000
}

const convertRoman = (str) => {
	let integer = lib[str[str.length-1]];
	for(let i = str.length; i >= 0; i--){
		if(lib[str[i]] < lib[str[i-1]]){
			integer = integer + lib[str[i-1]];
		}else if(lib[str[i]] > lib[str[i-1]]){
			integer = integer - lib[str[i-1]]
		}
	}
	return integer
}

console.log(convertRoman('MCMXCV'))



