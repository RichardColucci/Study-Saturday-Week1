// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');//morgan is a function
const studentRoute = require('./route/student.js')//obviusly this could be directly in the app.use callcack. //what does the DOT before SLASH do?
// Init App
//start the express application
const app = express(); //note app is a function and also has properties

// Basic Middleware
//telling express application to USE these DEPENDENCIES (as it is not a default) instead of looking in the app.js file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));


//adding another use
//think when you navigate in your browser to www.whatever.com/students
//in this case localHost:3000/students then ROUTE to the REQUiRE which in this case
//is the relative file path from the app.js file; 
//since app.js is already in the ROOT DIR study sat folder just ROUTE to '/route/students.js'
//keep in mind that we will need to export things like functions anf objects from students.js;
//the "use" means that we dont want app.js to beresonsible for getting, updating, POSTing DELETing"/students"
//CRUD

app.use('/students', studentRoute)

//in Davids intro to Node lecture we inported a class and string with detructuring (and another way with the entire file) and we could DOT off the require route and 
//use the class. //here we are using studentRoute vaiable above to to try and get the students array. why cant i access the 
//students array in the students.js file?

console.log('studRoute', studentRoute.students) //this code should work i would think. intead returns undefined;
//it may have something to do with express.Routes() being used in the student file and module.exports = routes and not the 
//individual variables within;

// Listen on server
//when we navigate in the browser to local host:3000 run this file that we already programmed to REQUIRE middleware express a parser and morgan
app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});

