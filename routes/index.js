var express = require('express');
var videocontroller = require('../controllers/videoAppController');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));

/* GET home page. */
router.get('/', videocontroller.get_all_movies);

router.get('/movies/:id/:vidsrc', videocontroller.get_one_movie);

router.post('/api', videocontroller.get_api_movie);
  //db an sql query to post a revi
module.exports = router;
