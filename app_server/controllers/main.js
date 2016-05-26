var mysql = require('../models/mysql.js');

//code for a get request
module.exports.index = function(req, res){
    mysql.getConnection(function(err, con){
      con.query('Select * from kennel', function(err, rows){
          if(err) throw err;
          res.render('index', { title : 'Mitt Romneys Adult Furry Friend Binder', mittRomneyList: rows });
      });
    });
};

//code for a post create request
module.exports.create = function(req, res){
    var name = req.body.name;
    var breed = req.body.breed;
    mysql.getConnection(function(err, con){
      con.query('INSERT INTO kennel (name, breed) VALUES ("' + name + '", "' + breed + '")');
    });
    res.redirect('/');
};

//code for a post delete request
module.exports.delete = function(req, res){
    var id = req.body.id;
    mysql.getConnection(function(err, con){
      con.query('DELETE FROM kennel WHERE id=' + id );
    });
    res.redirect('/');
};

//code to get us to the edit page
module.exports.edit = function(req, res) {
  var id = req.params.id;
  mysql.getConnection(function(err, con){
    con.query('SELECT * FROM kennel WHERE id=' + id, function(err, rows){
        if(err) throw err;
        res.render('edit', {data: rows[0]} );
     });
  });
};


//code for update request
module.exports.update = function(req, res){
    var id = req.params.id;
    var name = req.body.name;
    var breed = req.body.breed;
    mysql.getConnection(function(err, con){
      con.query('UPDATE kennel set name="' + name + '", breed="' + breed + '" where id =' + id );
    });
    res.redirect('/');
};
