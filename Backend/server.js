const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: 'Hill@123', // your MySQL password
  database: 'your_database_name', // your MySQL database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint to handle login data
app.post('/login', (req, res) => {
  const { SneakerID, Spassword } = req.body;
  const query = 'SELECT * FROM sneaker WHERE SneakerID = ? AND Spassword = ?';
  db.query(query, [SneakerID, Spassword], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Internal server error');
      return;
    }
    if (results.length > 0) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
