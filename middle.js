const log = console.log

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


log('array 1 items:',middle([1]));
log('array 2 items:',middle([1,2]));
log('array 3 items:',middle([1,2,3]));
log('array 4 items:',middle([1,2,3,4,]));
log('array 5 items:',middle([1,2,3,4,5]));
log('array 6 items:',middle([1,2,3,4,5,6]));


module.exports = middle;
