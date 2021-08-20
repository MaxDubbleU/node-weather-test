# node-weather-test
So I haven't built out an app that does weather and coordinates, so I'm gonna be pulling in some code from stack overflow and some youtube tutorials for working with the open weather map api, I'll be documenting my progress with these comments in code
as well as updating the readme file with all of the comments

line 7: above are just modules needed to get this running, request for processing the url request, and dotenv for storing the api key for open weather map

line 10: What this is doing is processing the user argument from the console(formatted as city,country, and this is going to be placed in our url to update our json information for that location)

line 20: So here I'm just using back ticks to allow me to include the json data in my console.log in a better way than doing "thing" + data, looks cleaner this way

line 25: Here we are just requesting our url's contents, which are in JSON, so we can just parse through that to make the data appear neater in the console and log it so it displays. In the event we get an error on our url it would show up.

As mentioned in the comments I'm going to most likely create a front end for this as well once I finish the other exercises. I followed for the most part some simple documentation on OpenWeatherMap,
as well as some guides on youtube just to check and make sure I was on the right track
