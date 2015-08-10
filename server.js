//**dependencies**
//serve static files
var express = require('express'); //
var bodyParser = require('body-parser');
var twilio = require('twilio');
var Firebase = require('firebase');

var myRootRef = new Firebase(
  'https://textsupport-janice.firebaseIO.com/numbers');
// myRootRef.set("hello world!");

// Twilio Credentials
var accountSid = '';
var authToken = '';

var client = require('twilio')(accountSid, authToken);

var app = express();
var port = 8080;

// **middleware**
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/support/messages/', function(req, res) {
  console.log(req.body.message);
  client.messages.create({
    to: req.body.to,
    from: "+19093452219",
    body: req.body.message,
  }, function(err, message) {
    console.log(message.sid);
  });
  res.send();
});


app.listen(port, function() {
  console.log('I\m watching you..', port);
});
