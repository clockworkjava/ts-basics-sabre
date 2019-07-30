class Info {

    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString = () => {
      return `${this.name} - ${this.email}`;
    };
}
