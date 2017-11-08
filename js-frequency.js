
 function frequent(array){
  
  let count = 0;
  let freq = 0;
  let item;
  
  for(let i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
     
      if(array[i]==array[j]){
        count++
      } 
      
    }
     if(count>freq){freq = count; item = array[i];}
     count=0;
  }
 
  console.log(item + '(' + freq + 'times)')
 
}

frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]); 



