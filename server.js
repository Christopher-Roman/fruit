// EJS is for dynamic templating

const express = require('express');
const app = express();
app.get('/', (request, response) => {
	response.send('This is a response from fruits, to a get request')
})

// We are requiring our model
// Our model by convention should be Capitalized
const Fruits = require('./models/fruits')

// This is an Index route
// Shows all of the fruit
app.get('/fruits', (req, res) => {
	res.send(Fruits);
})

// Query params, are extra stuff that we can put in
// our URL for our server to dynamically read.

// 	URL param - is a variable that we can capture
// in the URL


app.get('/fruits/:index', (req, res) => {
	console.log(req.params);
	res.render('show.ejs', {
// The property name becomes a variable within the EJS page
		fruit: Fruits[req.params.index]
	});
});








app.listen(3000, () => {
	console.log('server is listening, on port 3000');
})