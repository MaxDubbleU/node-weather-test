//So I haven't built out an app that does weather and coordinates, so I'm gonna be pulling in some code from stack overflow and some youtube tutorials for working with the open weather map api, I'll be documenting my progress with these comments in code
//as well as updating the readme file with all of the comments

const request = require("request");
const dotenv = require("dotenv").config();

//above are just modules needed to get this running, request for processing the url request, and dotenv for storing the api key for open weather map

const address = process.argv[2];
//What this is doing is processing the user argument from the console(formatted as city,country, and this is going to be placed in our url to update our json information for that location)

const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`;

if(!address){
    return console.log("Please enter the name of the city in the format city,country")
}

request(url, (error, response, body) => {
    const data = JSON.parse(body);
// So here I'm just using back ticks to allow me to include the json data in my console.log in a better way than doing "thing" + data, looks cleaner this way
   console.log(`In ${address}, it's ${data.main.temp} degrees celsius, latitude: ${data.coord.lat}, longitude: ${data.coord.lon}`);
   
});

//Here we are just requesting our url's contents, which are in JSON, so we can just parse through that to make the data appear neater in the console and log it so it displays. In the event we get an error on our url it would show up.