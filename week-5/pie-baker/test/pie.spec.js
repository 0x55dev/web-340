/**
 * Author: William Renard
 * Date: 4/20/2024
 * File Name: pie.spec.js
 * Description: jest test suite.
 */

"use strict";

const { bakePie } = require("../src/pie");

const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code); // include this line from textbook otherwise tests won't pass despite being correct

// Your tests here
describe("bakePie function", () => {
  let log; // this is a holding object for whatever the console message logs from the actual pie.js file.

  beforeEach(() => {
    log = jest.spyOn(console, "log"); // gives jest control over how Console.Log works
  });

  afterEach(() => {
    log.mockRestore(); // restores functionality to normal JavaScript functionality for console.log
  });
  // check if passing all essential ingredients will be successful
  test("Passes all essential ingredients", () => {
    bakePie("apple", ["flour","sugar","butter"]); // run the bakePie function with all essential ingredients
    expect(log).toHaveBeenCalledWith("Successfully baked apple pie!"); // expect it to be successful.
  });

    // check if leaving out pieType will give an error
  test("Passes all essential ingredients", () => {
    bakePie("", ["flour","sugar","butter"]); // run the bakePie function with all essential ingredients
    expect(log).toHaveBeenCalledWith("Warning: Error missing pie type!"); // expect it to be successful.
    expect(exit).toHaveBeenCalledWith(1);
  });

  
  // test 3, check if leaving out an essential ingredient will give an error.
  test("Leaves out one essential ingredient", () => {
    bakePie("apple", ["flour","sugar","eggs"]);
    expect(log).toHaveBeenCalledWith("Warning: Error missing essential ingredient!");
    expect(exit).toHaveBeenCalledWith(1);
  });
})


