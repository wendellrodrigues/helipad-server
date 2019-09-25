//Dependencies list
const express       = require ('express');
const bodyParser    = require('body-parser');
const routes        = require('./routes/routes');

//For process.env variables
require('dotenv').config();

//Initilize App
const app = express();

// Body parser Middleware parses HTTP requests into readable json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes PATH
app.use('/routes', routes);

//Initialize App
app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on PORT ${process.env.PORT}`)
});






