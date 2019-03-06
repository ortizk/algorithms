// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     console.log("randomIndex", randomIndex)
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// // Used like so
// var arr = [2, 11, 37, 42];
// arr = shuffle(arr);
// console.log(arr);

const myShuffle = (arr) => {
  var currentIndex = arr.length;
  var temp = 0;
  while (currentIndex != 0){
    var randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr
} 

console.log(myShuffle([3, 12, 67, 7, 9]))
