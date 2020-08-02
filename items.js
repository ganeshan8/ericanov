const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public')) //css file
app.use(express.static(__dirname + '/images')) //pictures
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);//link html file in ejs, or opposite

//getting data from url gist github
app.get('/placesToGo.ejs', function (req, res) {
	let url = `https://gist.githubusercontent.com/Ericaan/3303ab8ad7365278599c0044983048f5/raw/bf5a65aa5cf0f1bb7ffb83d2502c6cf2b76dd9b2/placesToGo.json/`
	request(url, function (err, response, body) {
		if(err){
			res.render('placesToGo', {quote: null, error: 'Error, please try again'});
		} 
		else {		
			let data = JSON.parse(body);
			console.log(data);
			if(data == undefined){
				res.render('placesToGo', {quote: null, error: 'Error, please try again'});
			}
			else {
				res.render("placesToGo.ejs", {data: data})
			}
		}
	});
})
app.get('/food.ejs', function (req, res) {
	let url = `https://gist.githubusercontent.com/Ericaan/3303ab8ad7365278599c0044983048f5/raw/8ed562c84e5b9d1a9a52935e21ff03aaf85fdd3b/food.json/`
	request(url, function (err, response, body) {
		if(err){
			res.render('food', {quote: null, error: 'Error, please try again'});
		} 
		else {		
			let data = JSON.parse(body);
			console.log(data);
			if(data == undefined){
				res.render('food', {quote: null, error: 'Error, please try again'});
			}
			else {
				res.render("food.ejs", {data: data})
			}
		}
	});
})
//direct to login page localhost:3000
app.get('/', (req, res) =>{
    res.render("loginpage.html")
})
//home page
app.get('/home.html', (req, res) =>{
    res.render("home.html")
})
//contact page
app.get('/contactpage.html', (req, res) =>{
    res.render("contactpage.html")
})
//The 404 Route
app.get('*', function(req, res){
	res.status(404).render('notfound');
});

app.listen(3000, function () {
	console.log('This app listening on port 3000!')
})