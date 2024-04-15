/**
 * Author: William Renard
 * Date: 4/14/2024
 * File Name: index.js
 * Description: the file that node.js will start from.
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

// setup the Emitter.on functionality to catch any emits from the emitter.
superhero.on("action", (args) => { // action
  console.log(`Superhero performs action: ${args}`); // use template literal to place the argument inside
});

superhero.on("danger", (args) => { // danger 
  console.log(`Superhero encounters danger: ${args}`);
});

superhero.on("help", (args) => { // help 
  console.log(`Superhero helps: ${args}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  if(command.toLowerCase() == "action") { // check if the command is equal to this, convert command to lowercase first.
    superhero.emit("action", args);
  } else if(command.toLowerCase()  == "danger") {
    superhero.emit("danger", args);
  } else { // in this case since there's no other type of command to look out for, we will assume that it is the help command they're running.
    superhero.emit("help", args);
  }
});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);