const express = require('express');
const routes = require('./routes');
require('dotenv').config();

// import sequelize connection
const sequelize = require('./config/connection');

// Server variables and port definition; includes heroku dynamic port
const app = express();
const PORT = process.env.PORT || process.env.DB_PORT;

// Middle ware to handle Posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish use of routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});



