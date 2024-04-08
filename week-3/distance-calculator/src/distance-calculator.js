"use strict";

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function

  // so the email stated that we may need to multiply by -1 in order to get a positive number
  // but depending on the order of the planets we might not need to, if the subtraction is a positive number
  // then we can just return the distance seen below
  
  if (!(planet1 in planetDistances) || !(planet2 in planetDistances)) {
    throw new Error('Invalid planet name(s) provided');
  }
  const distance1 = planetDistances[planet1];
  const distance2 = planetDistances[planet2];

  const distance = distance1 - distance2;

  if(distance < 0) {
    return -1*(distance1 - distance2); // multiply by -1 in order to get the positive number. Just flipping the sign.
  } else {
    return distance;
  }
}

// so I think the idea is to export both of these, the function and the object.
// we can use the object as a parameter instead of having to do string comparisons or lookups within the test.
// the idea of TDD is to keep things as simple as possible and I think this is the overall way of achieving that.

const planetDistances = {
  Earth: 1,
  Mars: 1.52,
  Mercury: 0.39,
  Venus: 0.72,
  Saturn: 9.54,
  Uranus: 19.22,
  Neptune: 30.06,
  Jupiter: 5.20
}

// export just the function 
module.exports = calculateDistance;