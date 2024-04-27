/**
 * Author: William Renard
 * Date: 4/14/2024
 * File Name: server.spec.js
 * Description: the file for all our tests
 */
"use strict";

const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here

describe("Server", () => {
  afterAll(() => {
    server.close();
  });

  // we need a test for post route for creating character
  test("responds to post request with character info query parameters", done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/createCharacter?role=Mage&gender=Female&funFact=can%20teleport.',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
      data += chunk;
    });
      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Character created.');
        done();
      });
    });
    req.end();
  });

  // next we need a test for post route confirming character creation

  test('responds to /confirm POST request', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
        res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character was created.');
        done();
      });
    });
    req.end();
  });

  // lastly we need a test for a get route that allows us to view the character

  test('responds to /getCharacter GET request', done => {
    http.get('http://localhost:3000/getCharacter', res => {
    let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character is a Female Mage who can teleport.');
        done();
      });
    });
  });
});