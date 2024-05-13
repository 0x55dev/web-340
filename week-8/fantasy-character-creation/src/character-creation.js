"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// chose to do callbacks since it's something I feel like I need more experience with.
// For callbacks:
///*
const fs = require('fs');
const { join } = require('path');

const character = {
  gender: 'Male',
  class: 'Warrior',
  funFact: 'Enjoys cooking in spare time'
};

const CHARACTER_FILE = join(__dirname, "characters.txt");

function createCharacter(character, callback) { // this is going to be for creating the data
  const data = character; // get the data for the function
  fs.writeFile(CHARACTER_FILE, data, (err) => { // write the data to the character_file
    if (err) { // if FileSystem has an error, this is where it will appear
      callback(err); // Pass the error to the callback
    } else {
      callback(null); // No error, invoke callback without error
    }
  });
}

function getCharacters(callback) { // so this is for reading the data
  fs.readFile(CHARACTER_FILE, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const characters = data; // we need to split the characters into individual objects?
      callback(null, characters); // call callback function with no errors, and with the data we retrieved.
    }
  });
}

// createCharacter(character);
//*/

// For promises:
/*
const fs = require('fs').promises;

async function createCharacter(character) {
  // TODO: Implement this function
}

async function getCharacters() {
  // TODO: Implement this function
}
*/

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

module.exports = { createCharacter, getCharacters }; // For callbacks
// module.exports = { createCharacter, getCharacters }; // For promises