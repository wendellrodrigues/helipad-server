//Dependencies list
const express = require ('express');


//For process.env variables
require('dotenv').config();

//Initilize App
const app = express();


//Initialize App
app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on PORT ${process.env.PORT}`)
});






