var ODatabase = require('orientjs').ODatabase;
var db = new ODatabase({
   host:     '10.10.1.10',
   port:     2480,
   username: 'root',
   password: '123456',
   name:     'TEST'
});

 
db.class.create('Player')
   .then(
      function(player){
         console.log('Craeted class: ' + player.name);
      }
   );