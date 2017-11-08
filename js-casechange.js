

function test(text){

let changed = '';

for(let i=0; i<text.length; i++){

if(text[i]==text[i].toLowerCase()) {changed+=text[i].toUpperCase();}

else {changed+=text[i].toLowerCase();}

}

console.log(changed); 

}

test('tHE qUICK bROWN fOX'); 

/*
Exception: SyntaxError: function statement requires a name
@Scratchpad/6:3
*/