// Code your solution in this file.
function lowerCaseDrivers(array){
  let array2 = [];
  return array.map(function(array2){
    return array2.toLowerCase();
  });
}

function nameToAttributes(array){
  let array3 = [];
  return array.map(function(array3){
    const arrayFN = array3.split(' ')[0];
    const arrayLN = array3.split(' ')[1];
  return { firstName: arrayFN, lastName: arrayLN};
});
}

function attributesToPhrase(array){
return drivers.map(function (driver){
  return '${drivers[name] is from ${drivers[homestown]}}';
});
}