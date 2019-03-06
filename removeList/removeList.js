// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// If a value is present in b, all of its occurrences must be removed from the other:


// const array_diff = (arr, remove) => {
// 	var filtered = arr.filter(item => !remove.includes(item))
// 	return filtered
// }
// console.log(array_diff([1,2,2,2,3],[2])) // == [1,3]
// console.log(array_diff([1,2],[1])) // == [2]


// take out all of the "the" 's in this sentence

const the = (str, word) => {
	str = str.split(' ')
	var noThe = str.filter(item => !word.includes(item))
	return noThe.join(" ")
}


console.log(the("the time when there was the best french onion soup was the best time ever", "the"))