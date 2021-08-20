# node-weather-test/filereader
So I haven't built out an app that does weather and coordinates, so I'm gonna be pulling in some code from stack overflow and some youtube tutorials for working with the open weather map api, I'll be documenting my progress with these comments in code
as well as updating the readme file with all of the comments

line 7: above are just modules needed to get this running, request for processing the url request, and dotenv for storing the api key for open weather map

line 10: What this is doing is processing the user argument from the console(formatted as city,country, and this is going to be placed in our url to update our json information for that location)

line 20: So here I'm just using back ticks to allow me to include the json data in my console.log in a better way than doing "thing" + data, looks cleaner this way

line 25: Here we are just requesting our url's contents, which are in JSON, so we can just parse through that to make the data appear neater in the console and log it so it displays. In the event we get an error on our url it would show up.

As mentioned in the comments I'm going to most likely create a front end for this as well once I finish the other exercises. I followed for the most part some simple documentation on OpenWeatherMap,
as well as some guides on youtube just to check and make sure I was on the right track
-----
For the file reader, I wanted to just get down the basic version of getting the file reader up and running, much like the weather test before tinkering around on the front end. What tripped me up for a couple minutes making this was getting the fs.readFileSync to actually read the correct path. I never had the issue of it searching within the project directory when doing similar challenges like this in Java for school, so it was interesting reading on stack overflow on why this happens. As a fix, I installed the path module. Ideally if this were to scale up and be useful in an actual application, I would probably build out a front end and then connect to a database that can store and display these files, either like a blog post of some sorts or as a library of free txt files for textbooks, dictionaries, etc.

-----
For exercise 3, I created a database using MongoDB, and created the collection within the code itself in user-schema.js. This one in particular caused a lot of trouble in the setup as I learned quickly I didn't have the MongoDB server installed as well as some other dependencies, so with the help of stack overflow and some youtube guides I was able to get past some common issues that can happen when setting it all up. Similar to the previous two exercises, I used yargs and allowed for a user to pass in the database information through the console(this info just being what was given for the json data in the google doc), and then used the setup in user-schema.js to actually create this inside the database. In a real world situation, usually there would be a front end for the user to input this data into, and instead of yargs we would just be taking in the data they input on the page. I would also probably add in options to update or delete this information as well if the website required it. 
