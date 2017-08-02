var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

for (var a = 10; a > 0; a--){
  console.log(a)
}

//Merging arrays and ridding duplicates

function mergeArray (array1, array2) {
  var array3 = array1.concat(array2)
  //console.log(array3)
  var unique = array3.filter(function(value, index, self){
    return self.indexOf(value) === index
  })
  console.log(unique)
}
mergeArray([1,1,2],[2,4,5])

//making an array of x positions, with values y

function fillArray (x, y) {
  var a = [];
  a.length = x;

  var index = 0
  while (index < x) {
    a[index] = y
    index++
  }
  console.log(a)
}

fillArray (5,10)

//function to find the highest number in an array

function highestNumber(z){
  return Math.max(...z);
}
highestNumber([1,4,2])

//function to find the lowest number in an array

function lowestNumber(z){
  return Math.min(...z);
}
lowestNumber([1,4,2])

//function to print out the smallestNumber

function smallestNumber(z){
  var absArray = []
  z.forEach(function(value){
    absArray.push(Math.abs(value))
    // console.log(value)
  })
  // console.log(absArray)
  return Math.min(...absArray)

}
smallestNumber([-1333,-4998,232,-10055])

//function to add numbers in an array

function sum (x) {
  return x.reduce(function(total, num){
    return total + num;
  })
}

sum([1,4,2])

//Index highest number

function indexHighestNumber(z){
  var highestValue = Math.max(...z);
  var index = 0
  while (index < z.length) {
    if (z[index] === highestValue) {
      return index;
    }
    index++
  }
}
indexHighestNumber([-1333,-4998,232,-10055])

//Create a function that calculate the mean value.
function mean(m){
  var sum = m.reduce(function(total, num){
    return total + num;
  })
  return sum/m.length
}
