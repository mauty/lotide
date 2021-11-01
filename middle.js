const middle = function (array){
  let resuts = []
  let index = Math.floor(array.length/2)
  if (array.length <= 2) {
    return resuts
  }
  else if (array.length % 2 === 0) {
      resuts.push(array[(index)-1])
      resuts.push(array[(index)]) 
  }
  else {
    resuts.push(array[index])
  }
  return resuts
};


module.exports = middle;
