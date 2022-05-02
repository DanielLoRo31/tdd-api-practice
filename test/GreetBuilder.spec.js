const { expect } = require("expect");
const GreetBuilder = require("../src/GreetBuilder");

describe("GreetBuilder class test", () => {
  const validName = "Juan";

  it("should greet a person", async () => {
    const greetingBuilder = new GreetBuilder(validName);
    const greeting = greetingBuilder.build();

    expect(greeting).toBe(`Hello ${validName}!`);
  });

  it('should throw NameInvalidException if name is "Daniel"', async () => {
    const greetingBuilder = new GreetBuilder('Daniel');
    expect(greetingBuilder.build.bind(greetingBuilder)).toThrow('NameInvalidException');

  });

  it("should thrown NameIsUndefinedException if no name provided", async () => {
    const greetingBuilder = new GreetBuilder();
    expect(greetingBuilder.build.bind(greetingBuilder)).toThrow('NameIsUndefinedException');
  });
});
