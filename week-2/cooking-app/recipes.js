/**
 * Author: William Renard
 * Date: 3/29/2024
 * File Name: recipes.js
 * Description: The module for our cooking app.
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  let recipe = "Recipe created with ingredients: ";
  for(let i = 0; i < ingredients.length; i++) { // loop through all ingredients and add to the string.
    recipe += (ingredients[i]); // so instead of writing this twice we're going to just add the ingredient
    if(ingredients.length !== 1 && i !== ingredients.length-1) { // then if either of these cases are met, we'll add a comma.
       recipe+= ", "; // the comma is needed if we have more than one ingredient and are not at the end of the ingredient list.
    }
  }
  return recipe; // return the whole recipe string.
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return "Timer set for " + minutes.toString() + " minutes";
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return "Program exited";
  process.exit(1);
}

// TODO: Export the functions

module.exports = { createRecipe, setTimer, quit };