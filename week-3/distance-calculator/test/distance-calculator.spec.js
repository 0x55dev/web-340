"use strict";

const assert = require('assert');
const calculateDistance  = require('../src/distance-calculator');

// I removed the description test as I am pretty sure that was just a placeholder?
// the comment below said to put the test functions so I put them all there.

function testEarthToJupiter() {
  try { // try catch block to handle errors
    assert.strictEqual(calculateDistance("Earth", "Jupiter"), 4.20); // we want to make sure the value returned matches what we expect.
    console.log("Passed!"); // then we return passed.
    return true;
  } catch(error) {
    console.error(`Failed testEarthToJupiter:${error.message}`); 
    return false;
  }
}

function testJupiterToUranus() { // we want to make sure that if we flip the order of the numbers that it still works.
  try {
    assert.strictEqual(calculateDistance("Jupiter", "Uranus"), 14.02); 
    console.log("Passed!");
    return true;
  } catch(error) {
    console.error(`Failed testEarthToJupiter:${error.message}`);
    return false;
  }
}

function testInvalidName() { // we want to make sure that if we flip the order of the numbers that it still works.
  try {
    assert.throws(() => { // we want to use assert.throws to make sure that we get a message and the message is what we expect.
      calculateDistance("Jupite", "Uranus");
    }, {
      name: 'Error', // because we use throw new Error 
      message: 'Invalid planet name(s) provided'
    });
    return true;
  } catch(error) {
    console.error(`Failed testEarthToJupiter:${error.message}`);
    return false;
  }
}

// Call your test functions here

testJupiterToUranus();
testEarthToJupiter();
testInvalidName();