const GreetBuilder = require("../../src/GreetBuilder");
const { expect } = require("expect");

class GreetBuilderMock {
  constructor(sandbox) {
    // console.log(Object.getPrototypeOf(GreetBuilder.prototype))
    // this.instanceStub = sandbox.createStubInstance(GreetBuilder)
    this.buildStub = sandbox.stub(GreetBuilder.prototype, "build");
    this.withBuildReturning.bind(this);
    this.withBuildThrowingNameInvalidException.bind(this);
    this.expectBuildCalled.bind(this);
  }

  withBuildReturning(value) {
    this.buildStub.returns(value);
  }

  withBuildThrowingNameInvalidException() {
    this.buildStub.throws(new Error("NameInvalidException"));
  }

  withBuildThrowingUnknownException() {
    this.buildStub.throws(new Error("Fol of a Tuk!!!!"));
  }

  expectBuildCalled(callCount) {
    expect(this.buildStub.callCount).toBe(callCount);
  }
}

module.exports = GreetBuilderMock;
