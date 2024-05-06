const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.characterData = "The character has the following traits:";
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    const charData = chunk.toString().trim(); // convert to string and trim off any whitespace characters.
    if (!charData || charData.length === 0) { // if the data either does not exist or the length of the data is 0 (empty string), then send an error
      callback(new Error("Invalid data")); // sending of the error
      return;
    }
    this.queue.push(charData); //otherwise push the data to the queue
    callback(); // call the callback function.
  }

  _read(size) {
    if (this.queue.length === 0) { // if the queue is empty
      this.push(null); // we're going to push null to signify no more data.
    } else {
      const formattedTraits = this.queue.join(', '); // join together the queue with this format
      const formattedData = `${this.characterData} ${formattedTraits}\n`; // create a formatted data structure like so

      this.push(formattedData); // push the data
      this.queue = []; // empty/reset the queue
    }
  }
}

module.exports = CharacterCreator;