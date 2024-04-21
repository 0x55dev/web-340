/**
 * Author: William Renard
 * Date: 4/20/2024
 * File Name: pie.js
 * Description: main file for pie-baker.
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ["flour", "sugar", "butter"];
  // takes a type of pie
  // takes an array of ingredients

  for(let i = 0; i < ingredients.length; i++) { // loop through all essential ingredients
    if(!essentialIngredients.includes(ingredients[i])) { // check if the ingredients passed are included.
      console.log("Warning: Error missing essential ingredient!"); 
      process.exit(1); // exit
    }
  }
  if(pieType.trim() === "") { // trim the string to hopefully catch an empty white spaces.
    console.log("Warning: Error missing pie type!"); // if the string is empty then we are missing a pieType
    process.exit(1); // log and exit
  }
  console.log(`Successfully baked ${pieType} pie!`) // otherwise log a successful bake
  // determine if the pie was successfully baked or not
  // check if an essential ingredient is missing (flour, sugar, butter)

}

module.exports = { bakePie };

// test 1, check if essential ingredient is missing or not
// test 2, check if pie was baked successfully or not
// test 3, check if process.exit is called (make sure this is last)