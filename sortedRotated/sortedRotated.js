// check if a given array is sorted even when rotated

// splice at lowest index and concat both arrays together and see if sorted 

const sortedRotated = (arr) => {
	let lowest = arr.indexOf(Math.min(...arr));
	let unrotated = [...arr.slice(lowest), ...arr.slice(0, lowest)]
	for(let i = 0;i < unrotated.length;i++){
		if(unrotated[i] > unrotated[i+1]){
			return false
		}
	}
	return true
	
}

console.log(sortedRotated([3, 4, 7, 5, 1, 2]))