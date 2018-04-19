const { Client } = require('pg');
const express = require('express');
const parser = require('body-parser');
const path = require('path');

/**
 * client instance of postgresql DB
 */
const Client = new Client({
    user: 'voldemort',
    password: 'hewhomustnotbenamed',
    database: 'assignment_7',
    port: 5432
});

/**
 * retrieve port and create application instance of express
 */
const PORT = process.env.PORT || 8080;
const app = express();

/**
 * set port and body-parser middleware usage for
 * form-url-encoded, and json
 */
app.set('port', PORT);
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

/**
 * set user route, that requires app and client
 */
const users = require('./routes/users')({ app, client });
app.use('/api/users', users);

/**
 * set api default route for checking status
 */
app.get('/api', (req, res) => {
    res.send('API Running');
});

/**
 * for all other routes not specified,
 * send "Application Running" message
 */
app.get('*', (req, res) => {
    res.send('Application running');
});

/**
 * listen on specified port and show on terminal console
 */
app.listen(PORT, () => {
    console.log(`listening on port ${port}`);
});
