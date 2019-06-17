const path = require('path');
const express = require('/usr/lib/node_modules/express');
const bodyParser = require('/usr/lib/node_modules/body-parser');
const mysql = require('/usr/lib/node_modules/mysql');

var UBUNTU = 0;

if (UBUNTU) var hostname = '127.0.0.1';
else var hostname = '192.168.7.2';

var port = 8080;

// Create a server
var app = express();

//Body parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Database connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gpr3_users'
});

connection.connect((err) => {
    if (err) console.log("Error connecting to database");
    else console.log("Connected to database");
})

//Rendering Frontend
app.get('/gpr3_homepage.html', (req, resp) => {
    resp.sendFile('gpr3_homepage.html', { root: path.join(__dirname, './webpages') });
});

//Insert in database in backend
app.post('/register', (req, res) => {

    var username = req.body.firstname;
    var conf = req.body.conf;

    var sql = "INSERT INTO users (name, id) VALUES ('" + username + "' , '" + conf + "')";

    connection.query(sql, (err, result) => {
        if (err) {
	    console.log("Error saving data in database");
            res.send("Error saving data in database");
	}
        else {
            console.log("Added to database");
            res.send("Registered");
        }
    });
});

// Console will print the message
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
