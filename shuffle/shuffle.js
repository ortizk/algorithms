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
