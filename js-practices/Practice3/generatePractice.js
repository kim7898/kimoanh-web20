'use strict'
function generate(testLengthArray){
  var testlist = [];
  for(let i = 0;i < testLengthArray.length; i++){
    let object = {};
    let number = Number(testLengthArray[i]);
    let min = -10000;
    object.input = [];
    
    for(let j = 0;j < number;j++){
        let addNumber = Math.floor(Math.random() * (Math.floor(20000/number) + 1));
        min += addNumber;
        object.input.push(min);
    }
    if( i === 1 || i === 2){
      if( i === 1){
        object.target = object.input[0];
      }else{
        object.target = object.input[object.input.length - 1];
      }
    }else{
      object.target = Math.floor(Math.random() * (10000 + 10000) - 10000);
    }
    
    object.output = object.input.indexOf(object.target);
    testlist.push(object);
  }
  return testlist;




  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
}
module.exports = generate
