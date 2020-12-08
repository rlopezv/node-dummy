//Load express module with `require` directive
const express = require('express');
const cors = require('cors');
const app = express();
const MIN = 0;
const MAX = 100;
const LEVEL = 0;

app.use(cors());

//Define request response in root URL (/)
app.get('/status', function (req, res) {
  var random = Math.floor(Math.random() * (MAX-MIN)+MIN);
  if (random>LEVEL) {
    res.send('GREEN');
  } else {
      res.status(500);
      res.send('ERROR');
  }
   
})

//Launch listening server on port 8080
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})