 function showArray(array){
  
for (var i=0; i<array.length; i++){
  
  var arrayMember = array[i];
  
  console.log("row" +i);
  
  for (var j=0; j<arrayMember.length; j++){
   
    console.log(arrayMember[j]);
    
  }  
}

}

showArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);   


