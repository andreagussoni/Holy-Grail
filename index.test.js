const request = require("supertest");
const app = require("./index.js");

describe("Test the data path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/data")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});