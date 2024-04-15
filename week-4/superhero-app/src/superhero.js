/**
 * Author: William Renard
 * Date: 4/14/2024
 * File Name: superhero.js
 * Description: Module for superhero related functionality.
 */

const EventEmitter = require("events");

// TODO: Create a SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone

class SuperheroEmitter extends EventEmitter { // basic EventEmitter class setup
  constructor() { // setup constructor 
    super();
  }

  performAction(action) { 
    this.emit("action", action); // if an emit event is ran with the type of action then performAction will run.
  }

  encounterDanger(danger) { 
    this.emit('danger', danger); // if an emit event is ran with the type of danger then encounterDanger will run.
  }

  helpSomeone(person) {
      this.emit('help', person); // if an emit event is ran with the type of help then helpSomeone will run.
  }
}

module.exports = SuperheroEmitter;