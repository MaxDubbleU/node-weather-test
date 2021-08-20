//When inputting your file directory, make sure it's the full path like as follows: node fileReaderTest C:\Users\Darin\Downloads\sample3.txt, without this it will look in the directory of this project rather than where your file actually is
const fs = require('fs');
const argv = require('yargs').argv;
const path = require("path");
//Imports for the file reader, yargs which allows better control over user arguments, and the path module in order to read file paths better

/*
console.log(argv);
console.log(argv._[0]);
These were just to make sure we were getting the correct index of the argument being passed
*/
const filename = argv._[0];

//Here we are getting are declaring our variable filename, as the first index of our argument(which should be the file path you input in the console)

var data = fs.readFileSync(path.resolve(__dirname, filename), 'utf-8');

// Then we declare our data variable as the fs.readFileSync, and we make sure we include utf-8 so that we can get the actual text itself

console.log(data);
