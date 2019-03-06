// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// -----TO RUN IN TERMINAL: NODE <FILENAME>

// indicies of winning:
// 0,0,0
// 1,1,1
// 2,2,2
// 0,1,2 (on all rows)
// 2,1,0

// const win = {
// 	'win': [[1,1,1],[2,2,2],[0,1,2],[2,1,0]]
// 	}

// var _ = require('underscore');

// const check = (arr) => {
// 	if(_.isEqual(arr, [1,1,1])){
// 		return 1
// 	} else if(_.isEqual(arr,[2,2,2])){
// 		return 2
// 	} 
// }


// const isSolved = (board) => {
// 	const rows = board.reduce((rows,next,i) => {
// 		if(!rows[i]){
// 			rows[i] = next  
// 		}
// 		return rows
// 	}, 
// 	{});	
// 	let col1 = [];
// 	let col2 = [];
// 	let col3 = [];
// 	for(row in rows){
// 		if(check(rows[row]) == 1){
// 			return 1
// 		} else if(check(rows[row] == 2)){
// 			return 2
// 		} else {
// 			col1.push(rows[row][0]);
// 			col2.push(rows[row][1]);
// 			col3.push(rows[row][2]);	
// 		}
// 	}
// 	if(check(col1) == 1){
// 		return 1
// 	} else if(check(col1) == 2){
// 		return 2
// 	}
// 	if(check(col2) == 1){
// 		return 1
// 	} else if(check(col2) == 2){
// 		return 2
// 	}
// 	if(check(col3) == 1){
// 		return 1
// 	} else if(check(col3) == 2){
// 		return 2
// 	}
// 	let diag1 = [col1[0], col2[1], col3[2]];
// 	let diag2 = [col1[2], col2[1], col3[0]];
// 	if(check(diag1) == 1){
// 		return 1
// 	} else if(check(diag1) == 2){
// 		return 2
// 	}
// 	if(check(diag2) == 1){
// 		return 1
// 	} else if(check(diag2) == 2){
// 		return 2
// 	}

// }


// isSolved( [[0, 0, 1], [0, 1, 2], [2, 1, 0]] )


// CODEEWARS SOLUTION
function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   console.log(board)
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}

isSolved( [[0, 0, 1], [0, 1, 2], [2, 1, 0]] )












