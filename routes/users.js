const path = require('path');

/**
 * handles the user routes for the API
 * @param  app Express application instance 
 * @param  client postgresql Client instance
 */
module.exports = (app, client) => {

  /**
   * handles POST request to default user route
   * 
   * client makes connection and attempts to
   * add new user to DB
   */
  app.post('/', (req, res) => {
    client.connect();
    const user = {
      name: req.body.name,
      age: req.body.age
    };
    client.query('insert into users (name, age) values ($1, $2)',
      [user.name, user.age])
      .then(result => {
        res.send('there was an error processing your request');
        client.end();
      }).catch(err => {
        console.log(err);
        res.send('user successfully added to database');
        client.end();
      });
  });

  /**
   * handles GET request to default user route
   * 
   * client makes connection and attempts to
   * retrieve all users from DB
   */
  app.get('/', (req, res) => {
    client.connect();
    client.query('select * from users').then(result => {
      res.send(result.rows);
      client.end();
    }).catch(err => {
      console.log(err);
      res.send('problem with getting users');
      client.end();
    })
  });
}
