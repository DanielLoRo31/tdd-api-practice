const { expect } = require("expect");
const request = require("supertest");
const app = require("../src/app");
const sinon = require("sinon");
const GreetBuilderMock = require("./test-doubles/GreetBuilderMock");

describe("app test", () => {
  let sandbox;

  //antes de todas las pruebas
  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    greetBuilderMock = new GreetBuilderMock(sandbox);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should respond 200 OK when greeting a person", async () => {
    greetBuilderMock.withBuildReturning("Hello Juan!");
    const test = await request(app).get("/greet/Juan").expect(200);

    const response = test.body;
    expect(response).toEqual({ greeting: `Hello Juan!` });
    greetBuilderMock.expectBuildCalled(1);
  });

  it("should respond 400 BadRequest if provided an invalid name", async () => {
    const invalidName = "Daniel";

    greetBuilderMock.withBuildThrowingNameInvalidException();

    const test = await request(app).get(`/greet/${invalidName}`).expect(400);

    const response = test.body;
    expect(response).toEqual({ message: `Name ${invalidName} is invalid` });
    greetBuilderMock.expectBuildCalled(1);
  });

  it("should respond 500 Internal Server Error if an unknown exception occurs", async () => {
    greetBuilderMock.withBuildThrowingUnknownException();

    await request(app).get("/greet/Juan").expect(500);
    greetBuilderMock.expectBuildCalled(1);
  });
});
