"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
const fs = require('fs');

// For promises:
// const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  const character = { // going to create character data here as a way to pass it into tests. No sense in rewriting it multiple times
    gender: 'Male',
    class: 'Warrior',
    funFact: 'Enjoys cooking in spare time'
  };

  // mocks were pulled from the textbook examples
  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(fs, 'readFile').mockImplementation((file, options, callback) =>
      callback(null, {"class": "Warrior", "funFact": "Enjoys cooking in spare time", "gender": "Male"}));
       jest.spyOn(fs, 'writeFile').mockImplementation((file, data, callback) =>
      callback(null));
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  test("createCharacter writes a new character to the file", (done) => {
    createCharacter(character, (err) => {
      expect(err).toBeNull(); // we expect this one to go through accurately without any errors. 
      done(); 
    });
  });


  test("getCharacters reads character from the file", (done) => {
    const expectedCharacter = {   // we expect it to be this data because this is what we have passed in.
      gender: 'Male',
      class: 'Warrior',
      funFact: 'Enjoys cooking in spare time'
    };
    getCharacters((err, characters) => {
      expect(err).toBeNull(); // so when we run this, we expect there to be no errors
      expect(characters).toEqual(expectedCharacter);
      done();
    });
  });

  // got stuck on this one for awhile but it was because I was only passing one parameter into the 
  // createCharacter function and it got the function signatures messed up trying to pass the error as character data.
  test("createCharacter handles errors when writing to file", (done) => {
    // Mocking fs.writeFile to throw an error
    fs.writeFile.mockImplementationOnce((filePath, data, callback) => {
      callback(new Error("File not found"));
    });
  
    createCharacter(character, (err) => {
      expect(err).not.toBeNull();
      expect(err.message).toBe("File not found");
      done();
    });
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  // 2. Test that getCharacters reads characters from the file
  // 3. Test that createCharacter handles errors when writing to the file
});