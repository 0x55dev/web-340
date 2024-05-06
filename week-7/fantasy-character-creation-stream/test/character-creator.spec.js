const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  // unfortunately I cannot seem to get both the first and third test to both pass.
  /*
     I do not know how it's supposed to send data back like what the first test expects
     while still providing a formatted string at the end of the data being processed.
     I looked at all the examples in the textbook but I unfortunately after two days on this 
     have to just submit this.
  */

  test("should process data correctly when written to", (done) => {

    const characterData = ["Rogue", "Male", "can turn invisible."]; // create dummy data to feed to the character-creator.
    characterData.forEach(characterData => characterCreator.write(characterData)); // for each element in the array we're going to feed that
    // this represents how data would be streamed into a program.

    characterCreator.on('data', (data) => { // 
      const charData = characterData.shift(); // shift removes the first element from the array, so as data comes in we'll compare to the first
      // index of the array until the array is empty
      expect(data.toString().trim()).toBe(charData); // basically we'll read out what trait is coming into the program.
      if(characterData.length === 0) { // this is when the array is empty and can now finish the test.
        done(); // finish
      }
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on("error", (err) => { // when an error comes in 
      expect(err.message).toBe("Invalid data"); // we expect the error to simply respond with Invalid Data
      done(); // then finish the test
    });
    characterCreator.write(""); // write empty data 
  });

  // so the first test is largely based off of the movie example, we need to feed all the player data into the character-creator.js script
  // I think the solution is for the buffer to then take the information and put it into a string and somehow return the string.
  // However, I think the way the character-creator is setup is that it will return each bit of data processed as soon as it comes in
  // 
  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const characterData = ["Rogue", "Male", "can turn invisible."]; // create dummy data to feed to the character-creator.
    const formattedData = characterData.join(", ");
    characterCreator.write(formattedData); // for each element in the array we're going to feed that
    const expectedOutput = `The character has the following traits: Rogue, Male, can turn invisible.`;
    characterCreator.on("data", (data) => {
      expect(data.toString().trim()).toBe(expectedOutput);
      done();
    });
  });
});