const request = require("supertest");
const app = require("./index.js");

describe("Test the data path", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200)
          .end(done)
          
        });
    });
  });
