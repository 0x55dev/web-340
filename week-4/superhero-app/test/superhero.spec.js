/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();

// TODO: Write tests for the SuperheroEmitter using TDD principles

function testPerformAction() { 
  try {
    let actionPerformed = false; // we are going to create a simple bool that way we can check with assert whether or not performAction or emitter is working

    superhero.on('action', (action) => { // event listener
      try {
        if (action) { // check if there is an action
          actionPerformed = true;
        }
      } catch (error) { // any errors will be printed here
        console.error('Error in event listener:', error);
      }
    });
  
    superhero.performAction("test"); // call perform action to ensure listener is working
    assert.strictEqual(actionPerformed, true, "test"); // assert to check if the variable changed
    console.log("Passed testPerformAction"); // pass test and return true.
    return true;
  } catch(error) {
    console.log("Failed testPerformAction"); // fail the test
    return false;
  }
}

function testEncounterDanger() {
  try {
    let dangerEncountered = false; // we are going to create a simple bool that way we can check with assert whether or not performAction or emitter is working

    superhero.on('danger', (danger) => { // event listener
      try {
        if (danger) { // check if there is an action
          dangerEncountered = true;
        }
      } catch (error) { // any errors will be printed here
        console.error('Error in event listener:', error);
      }
    });
  
    superhero.encounterDanger("test"); // call perform action to ensure listener is working
    assert.strictEqual(dangerEncountered, true, "test"); // assert to check if the variable changed
    console.log("Passed testEncounterDanger"); // pass test and return true.
    return true;
  } catch(error) {
    console.log("Failed testEncounterDanger");
    return false;
  }
}

function testHelpSomeone() {
  try {
    let someoneHelped = false; // we are going to create a simple bool that way we can check with assert whether or not performAction or emitter is working

    superhero.on('help', (person) => { // event listener
      try {
        if (person) { // check if there is an action
          someoneHelped = true;
        }
      } catch (error) { // any errors will be printed here
        console.error('Error in event listener:', error);
      }
    });
  
    superhero.helpSomeone("test"); // call perform action to ensure listener is working
    assert.strictEqual(someoneHelped, true, "test"); // assert to check if the variable changed
    console.log("Passed testHelpSomeone"); // pass test and return true.
    return true;
  } catch(error) {
    console.log("Failed testHelpSomeone");
    return false;
  }
}

// call all the tests
testPerformAction();
testEncounterDanger();
testHelpSomeone();