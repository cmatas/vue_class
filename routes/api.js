var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));

/* add review to the comment table*/
router.post('/', (req, res, next) =>{
  //db an sql query to post a review
  connect.query(`INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP, "${req.body.id}", "${req.body.stars}");`, (error, rows) => {
    if (error) {
      throw error;

    }else {
      res.json(rows);
    }
  })
});


module.exports = router;
