var express = require('express');
var router = express.Router();
var cors = require('cors')

const allBody = [];

/* GET home page. */
router.post('/cors', cors({
  "origin": "https://cors.3lancers.dev",
  "allowedHeaders": ["Access-Control-Allow-Origin"],
  "methods": ['POST', 'OPTIONS'],
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), function(req, res, next) {
  allBody.push({
    date: new Date(),
    body: req.body,
    url: req.url
  });
  res.send('OK');
});

/* GET home page. */
router.post('/no-cors', cors(), function(req, res, next) {
  allBody.push({
    date: new Date(),
    body: req.body,
    url: req.url
  });
  res.send('OK')
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/history', function(req, res, next) {
  res.header('Content-Type', 'application/json').send(JSON.stringify(allBody, null, 4));
});

module.exports = router;
