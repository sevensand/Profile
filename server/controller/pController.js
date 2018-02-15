var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');

let url = "mongodb://sevensand:sevensand29@ds231245.mlab.com:31245/myprofile";
mongoose.connect(url, {server: { poolsize:10}}, function(error){
  if (error) {
    console.log("err", error);
  } else {
    console.log("Connected to database");
  }
});

var pSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

var myprofile = mongoose.model('profile', pSchema);
var myblogs = mongoose.model('blogs', pSchema);



var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

//DISPLAY GET DATA IN MLAB API
app.get('/pController', function(req, res){
  myprofile.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  });
});

app.get('/weather', function(req, res){
  request('http://api.openweathermap.org/data/2.5/weather?id=289688&appid=886705b4c1182eb1c69f28eb8c520e20', function(error, response, body){
    res.json(body);
  });
});

app.get('/myblogs', function(req, res){
  myblogs.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  });
});

}
