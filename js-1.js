/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


function is_array(input){
  if(Array.isArray(input)){
    return true
  } else {return false}
}

console.log(is_array('w3resource'));
console.log(is_array([1,2,3,4]));