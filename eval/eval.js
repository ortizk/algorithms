// take a string with an equation and solve it


// ------WORKS------
// const evaluate = (str) => {
// 	return eval(str)
// }

// console.log(evaluate("3 + 7 - 1"))

// ------WORKS------
// const evaluate = (str) => {
// 	total = parseInt(str[0]);
// 	for(let i = 0; i < str.length; i++){
// 		if(str[i] === '+'){
// 			total = total + parseInt(str[i + 1]);
// 		} else if (str[i] === '-'){
// 			total = total - parseInt(str[i + 1]);
// 		}
// 	}
// 	return total
// }

// console.log(evaluate("3+7-1"))

// ------DOESN'T WORK------
// now take into account order of operations
const evaluate = (str) => {
	addTotal = parseInt(str[str.indexOf("+")-1]);
	subTotal = parseInt(str[str.indexOf("-")-1])
	add = [];
	sub = [];
	for(let i = 0;i < str.length;i++){
		if(str[i] === "+") add.push(i);
		if(str[i] === "-") sub.push(i)
	}
	console.log(add, sub)
	for(let j = 0;j < add.length;j++){
		console.log("here", parseInt(str[add[j]+1]))
		addTotal = addTotal + parseInt(str[add[j]+1])
	}
	for(let x = 0;x < sub.length;x++){
		console.log("in the sub", parseInt(str[sub[x]+1]))
		subTotal = subTotal - parseInt(str[sub[x]+1])
	}
	return addTotal + subTotal
}

console.log(evaluate("3-7+1"))








