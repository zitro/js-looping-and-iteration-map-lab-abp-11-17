// Code your solution in this file.
function lowerCaseDrivers(array){
  let array2 = [];
  return array.map(function(array2){
    return array2.toLowerCase();
  });
}

function nameToAttributes(array) {
  var newObj = {};
  for (var i = 0; i < array.length; ++i)
    newObj[i] = array[i];
  return newObj;
}

/*this function takes an array of drivers, and returns
an array of the drivers names in lowercase.*/
