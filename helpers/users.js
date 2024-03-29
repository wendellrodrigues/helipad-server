
module.exports = {

  //State object
  currentState : {
    drone: null,
  },

  //Drone list stored locally (ideally would work with a database)
  droneList : [
    firstDrone = {
      id: "0",
      parked: false,
      landingTime: 0,
      totalLandingTime: 0,
      avgLandingTime: 0,
      parkedTime: 0,
      totalParkedTime: 0,
      avgParkedTime: 0,
      numOfVisits: 0,

    },
    secondDrone = {
      id: "1",
      parked: false,
      landingTime: 0,
      totalLandingTime: 0,
      avgLandingTime: 0,
      parkedTime: 0,
      totalParkedTime: 0,
      avgParkedTime: 0,
      numOfVisits: 0,
    },
    thirdDrone = {
      id: "2",
      parked: false,
      landingTime: 0,
      totalLandingTime: 0,
      avgLandingTime: 0,
      parkedTime: 0,
      totalParkedTime: 0,
      avgParkedTime: 0,
      numOfVisits: 0,
    },
  ],

  /**
   *  Alters drone landing time AND landing related properties
   *  Updates UI with ONLY landing time
   * 
   * @param   id            id of drone to be searched (from droneList)
   * @param   landingTime   landingTime taken from arduino ultrasonic sensor
   * @return  void
   * */
  alterDroneLandingTime(id, landingTime) {

    //Pointers to current state objects
    const list = this.droneList;
    const state = this.currentState;

    //Find drone by id
    for(key in list) {
      const drone = list[key];

      if(drone.id == id) {

        //Set the drone's landing properties based on landingTime param
        drone.numOfVisits++;
        drone.landingTime = landingTime;
        drone.totalLandingTime += landingTime;
        drone.avgLandingTime = (drone.totalLandingTime / drone.numOfVisits);
        drone.parked = true;

        //Set the current state to the drone specified
        state.drone = drone;

      }
    } 
  },

  /**
   * Update full drone profile after (call alterDroneProfile)
   */
  alterDroneParkedTime(id, parkedTime) {

    //Pointers to current state objects
    const list = this.droneList;
    
    for(key in list) {
      const drone = list[key];

      if(drone.id == id) {
        drone.parkedTime = parkedTime;
        drone.totalParkedTime += parkedTime;
        drone.avgParkedTime = drone.totalParkedTime / drone.numOfVisits;
        drone.parked = false;
      }
    }
  },

}