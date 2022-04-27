class GreetBuilder {
  constructor(name) {
    this.name = name;
  }

  build = () => {
    
    this._throwIfNameUndefined();
    this._throwIfNameInvalid();
    
    return `Hello ${this.name}!`;
  }

  _throwIfNameInvalid = () => {
    if (this.name === "Daniel") {
      throw new Error("NameInvalidException");
    }
  }

  _throwIfNameUndefined = () => {
    if (this.name === undefined || this.name === null) {
      throw new Error("NameIsUndefinedException");
    }
  }
}

module.exports = GreetBuilder;
