/**
 * Author: William Renard
 * Date: 3/29/2024
 * File Name: index.js
 * Description: the entry to our node.js CLI program.
*/

// TODO: Import your module using require
const recipes = require('./recipes'); // import our recipes module.
const readline = require('readline'); // import the standard readline module from node

// TODO: Implement your CLI program here

function main() {
  const rl = readline.createInterface({ // setup the readline interface, this is from code example in chapter 1 of pragmatic node.js
    input: process.stdin,
    output: process.stdout
  });

  showMenu(); // show menu, menu is just 2 console.log statements.

  rl.question("What would you like to do?: ", function(answer) { // we want to ask a question, this opens up a user input prompt.
    if(answer == 1) { // if answer is 1: meaning they want to create a recipe we then ask what ingredients it will have.
      rl.question("What ingredients do you wish to use? (split ingredients with ','): ", function(ingredients) { // ask what ingredients.
        let ingredientArray = ingredients.split(", "); // we then will split the string 
        console.log(recipes.createRecipe(ingredientArray)); // pass the array into our module's createRecipe function, return the value.
        rl.close(); // close out the prompt.
      });
    } else {
      rl.question("How long do you want to set the timer for?: ", function(time) {
        if(!isNaN(time)) { // we want to make sure the answer for the timer is a number.
          console.log(recipes.setTimer(time)); //return the timer.
          rl.close();
        } else {
          console.error("stderr: 'Input must be a number.'"); //otherwise return an error since the timer input is not a number.
          rl.close();
        }
      });
    }
  });
}

function showMenu()
{
  console.log("1. Create Recipe");
  console.log("2. Create Timer");
}

main(); // entry into the main function. 

