const util    = require('util');
const users   = require('./users');

module.exports = { 

  /**
   * Sends a test message
   * @param   req   The request
   * @param   res   The response
   * 
   */
  sendTestMsg: async(req, res) => {
    console.log('We have a request from arduino');
    const field1 = req.body.field1;
  },


  /**
   * Sends a test message
   * @param   req   The request
   * @param   res   The response
   * 
   */
  getTimeToLand: async(req, res) => {

    console.log('A drone has parked');

    //The data sent by the arduino (regarding time to land)
    const id = req.body.id;
    const timeToLand = req.body.timeToLand;

    console.log(`ID:                    ${id}`);
    console.log(`Time it took to land:  ${timeToLand}`);

    users.alterDroneLandingTime(id, timeToLand);

    res.status(200).json("Success");
    
  },

  getParkedTime : async(req, res) => {

    console.log('A drone has taken off');

    const id = req.body.id;
    const parkedTime = req.body.parkedTime;

    console.log(`ID:                    ${id}`);
    console.log(`Parked Time:           ${parkedTime}`);

    res.status(200).json("Success");

  }










}