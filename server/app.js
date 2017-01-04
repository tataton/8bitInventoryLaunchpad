var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 3003;
var pg = require('pg');
app.use(express.static('public'));

var connectionString = 'postgres://localhost:5432/dev_scarves';

app.listen(port, function(){
  console.log('Server up on port:', port);
}); // end spin up server

// base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
}); // end home base

app.post('/addItem', urlEncodedParser, function(req, res){
  console.log('addItem route hit:', req.body);
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log(err);
    } else {
      client.query('INSERT INTO scarves (first_name, last_name) VALUES ($1, $2);', [req.body.first_name, req.body.last_name]);
      done();
      res.sendStatus(201);
    }
  });
}); // end addItem route

app.get('/getInventory', function(req, res){
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database from getInventory.');
      var allScarves = [];
      var query = client.query('SELECT * FROM scarves');
      query.on('row', function(row){
        allScarves.push(row);
      }); // end query
      query.on('end', function(){
        done();
        res.send(allScarves);
      });
    }
  });
  // get all items in the table and return them to client
}); // end addItem route
