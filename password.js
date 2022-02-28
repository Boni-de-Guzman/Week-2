const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Hello please create your password (minimum of 10 characters)", function(input){
   const firstText = "Password requirement did not meet. You only put";
   tokens = input.split(' ');
   text = tokens[0];


	if (text.length <= 9 ){
	console.log(`${firstText} ${input.length}`);
	} else {
        console.log ("Password requirement met")
        } 
        reader.close()
        });
