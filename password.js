const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Hello please create your password!", function(input){
	tokens = input.split(' ');
	
	text = tokens[0];


	if (text.length <= 10 ){
		console.log("Password requirement did not meet");
	} else {
        console.log ("Password requirement met")

    }
    reader.close()

});

