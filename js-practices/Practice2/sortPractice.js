'use strict'
function sort(input) {
  var done = false;
  while (!done) {
    done = true;
    for(var i = 1; i < input.length; i ++) {
      if (input[i - 1] > input[i]) {
        done = false;
        var new_index = input[i - 1];
        input[i - 1] = input[i];
        input[i] = new_index;
      }
    }
  }
  return input;
}
module.exports = sort