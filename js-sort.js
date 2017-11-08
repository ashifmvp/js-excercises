/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sort(array){
  
  var l = array.length;
  
  for(var i=0; i<l; i++) {
    for (var j=i+1; j<l; j++){
      if(array[j]< array[i]){
        
        var k = array[i];
        array[i]=array[j];
        array[j] = k;
      } 
    }

  }
  
  return array;
}
    
  console.log(sort([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ] )); 

