class GreetBuilder {
  constructor(name) {
    this.name = name;
    this._throwIfNameInvalid.bind(this)
    this._throwIfNameUndefined.bind(this)
    this.build.bind(this)
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

  build() {
    
    this._throwIfNameUndefined();
    this._throwIfNameInvalid();
    
    return `Hello ${this.name}!`;
  }
  
}

module.exports = GreetBuilder;
