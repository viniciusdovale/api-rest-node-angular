// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/cartola');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.json(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');







// //Dependencies
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var BookSchema = require('./models/product');
//
// var port = 3000;
// var db = 'mongodb://localhost/exemplo'
//
// //Mongoose
// mongoose.connect(db);
//
// //Express
// var app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
//
// app.use(bodyParser.json(), function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//
//
// //Routes
//
// app.get('/', function (req, res) {
//   res.send('working');
// });
// app.get('/books', function(req, res) {
//   console.log('getting all books');
//   BookSchema.find({})
//     .exec(function(err, data) {
//       if(err) {
//         res.send('error occured')
//       } else {
//         res.json(data);
//       }
//     });
// });
//
//
// // Start Server
// app.listen(port, function() {
//   console.log('app listening on port ' + port);
// });