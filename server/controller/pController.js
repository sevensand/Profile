var bodyParser = require('body-parser');
var mongoose = require('mongoose');


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

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

//DISPLAY GET DATA IN MLAB API
app.get('/pController', function(req, res){
  myprofile.find({}, function(err, data){
    if(err) throw err;
    res.json(data);
  });
});



}
