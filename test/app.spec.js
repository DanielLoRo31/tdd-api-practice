const { expect } = require("expect");
const request = require("supertest");
const app = require("../src/app");

describe("app test", () => {
  it("should respond 200 OK when greeting a person", async () => {
    const test = await request(app).post("/greet/Juan").expect(200);

    const response = test.body;
    expect(response).toEqual({ greeting: `Hello Juan!` });
  });

  it("should respond 400 BadRequest if provided an invalid name", () => {});

  it("should respond 400 BadRequest if no name was provided", () => {});
});
