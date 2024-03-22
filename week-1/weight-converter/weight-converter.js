/**
 * Author: William Renard
 * Date: 3/21/2024
 * File Name: weight-converter.js
 * Description: A converter for pounds to kilograms.
*/

"use strict";

// TODO: Implement the weight conversion logic here

// okay so we need to convert pounds to kilograms, it's a one way conversion only

const KILOGRAMS = 0.453592 // this is the constant for how much 1 pound is equal to in kilograms
let pounds = 0;

if(process.argv.length === 2) {
  console.error("stderr: ‘Usage: node weight-converter.js <pounds>");
  process.exit(1);
} else if(process.argv.length > 2) {
  pounds = process.argv[2];
  if(!isNaN(pounds)) { // checks if the argument is numerical
    console.log(ConvertWeight(pounds)); // if it's numerical then we pass it to the ConvertWeight function.
  } else { // if it's not numerical console log error
    console.error("stderr: 'Input must be a number.'");
    process.exit(1);
  }
}

function ConvertWeight(pounds) {
  return (pounds *= KILOGRAMS).toFixed(2); // I think it should literally be this simple, multiply pounds by the constant in the return
}