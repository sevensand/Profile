const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//api controller Display, POST, DELETE
const api = require('./server/controller/pController');

//mybody parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//DIST FOLDER
app.use(express.static(path.join(__dirname, 'dist')));

//API LOCATION
api(app);


//SEND ALL OTHER REQUEST TO THE ANGULAR APP
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//SET PORT
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Server is running on: ' + port));
