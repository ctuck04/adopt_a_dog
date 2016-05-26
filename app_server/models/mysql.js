
var mysql = require('mysql');

exports.getConnection = function(callback){
  var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'adopt_a_dog'
  });

  con.connect(function(err){
    if(err){
      console.log('Error connecting to adopt_a_dog');
      return callback(err);
    }
    callback(err, con);
  });
};
