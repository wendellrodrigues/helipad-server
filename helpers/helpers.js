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
   * 
   */
  getTimeToLand: async(req, res) => {

    console.log('A drone has parked');

    //The data sent by the arduino (regarding time to land)
    const id = req.body.id;
    let   timeToLand = req.body.timeToLand;
          timeToLand = parseFloat(timeToLand); // Turn string into double

    users.alterDroneLandingTime(id, timeToLand);

  },

  getParkedTime : async(req, res) => {

    console.log('A drone has taken off');

    const id = req.body.id;
    let   parkedTime = req.body.parkedTime;
          parkedTime = parseFloat(parkedTime); // Turn string into double

    users.alterDroneParkedTime(id, parkedTime);

  },












}