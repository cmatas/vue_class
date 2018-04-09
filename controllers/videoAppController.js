// handle the routing requests => the requests gets passed in via the route
const connect = require('../utils/sqlConnect');

exports.get_all_movies = (req, res) => {
  console.log('hit get all movies');

  connect.getConnection((err, connection) =>{
    if(err) {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`;

    connect.query(query, (err, rows) => {
      connection.release(); //let somebodu else use this connection

      if(err){
        return console.log(err.message);
      }

      console.log(rows);
      res.render('home', {
            defaultMovie : rows[Math.floor(Math.random() * rows.length)],
            data : JSON.stringify(rows),
            mainpage : true,
            videopage : false
          });
    })
  })
};

exports.get_one_movie = ((req, res) => {
  console.log('hit get one route');

  connect.getConnection((err, connection) => {
    if(err) {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_comments WHERE comments_movie ="${req.params.id}"`;

    connect.query(query, (err, rows) => {
      connection.release(); //let somebodu else use this connection

      if(err){
        return console.log(err.message);
      }

      console.log(rows);
        res.render('movie', {
          movie : req.params.id,
          trailer : req.params.vidsrc,
          data : JSON.stringify(rows),
          mainpage : false,
          videopage : true
        });
      })
    })
});

exports.get_api_movie = (req, res) => {
  console.log('hit the api');

  connect.getConnection((err, connection) => {
    if(err) {
      return console.log(err.message);
    }

    query = `INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP, "${req.body.id}", "${req.body.stars}");`;

    connect.query(query, (err, rows) => {
      connection.release(); //let somebodu else use this connection

      if(err){
        return console.log(err.message);
      }

      res.json(rows);
    })
  })
};
