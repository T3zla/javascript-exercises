const removeFromArray = function(array,  ...removeNum) {
  return array.filter(item => !removeNum.includes(item));
};
    

// Do not edit below this line
module.exports = removeFromArray;

