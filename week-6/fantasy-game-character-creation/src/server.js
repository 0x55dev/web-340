/**
 * Author: William Renard
 * Date: 4/14/2024
 * File Name: server.js
 * Description: the file that node.js will start from.
 */


const http = require('http');
const { parse } = require('path');
const url = require('url');

// because it seems that we need to have only the specific types I am going to create a class that will hold this
class Character {
  constructor(role, gender, funFact) {
    this.role = role;
    this.gender = gender;
    this.funFact = funFact;
  }
}

let fantasyCharacter = new Character("Warrior", "Male", "A brave adventurer");

// TODO: Implement your server here
const server = http.createServer((req, res) => {
  // TODO: Implement your routes here

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

    // we need to have a route for creating a character
  if(pathname === "/createCharacter" && req.method ==="POST") {
    // we need to look for query parameters that establish, the class
    // Warrior, Mage, or Rogue, Gender (Male, Female, Other), and a fun fact about the character
    fantasyCharacter = new Character(query.role, query.gender, query.funFact);
    res.writeHead(201);
    res.end(`Character created.`);
  }

  // then we need a post route for confirming the character was created
  if(pathname === "/confirm" && req.method ==="POST") {
    res.writeHead(200);
    res.end(`Character was created.`);
  }

  // lastly we need a Get route for viewing the character made in the initial post request
  if(pathname === "/getCharacter" && req.method ==="GET") {
    res.writeHead(200);
    res.end(`Character is a ${fantasyCharacter.gender} ${fantasyCharacter.role} who ${fantasyCharacter.funFact}`);
  }
  // we will need some sort of data structure for the character and then also an in-memory storage for retrieving whatever we make.
  // 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;