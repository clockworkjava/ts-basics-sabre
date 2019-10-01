interface Base {
  a: number;
  b: string;
}

interface Custom {
  x: number;
}

interface Ext extends Base, Custom {
  c: boolean;
}

let ax: Base = { a: 5, b: "a" };

let ac: Ext = { a: 15, b: "b", c: true, x: 5 };

let xx: Base = ac;

class BaseClass {
  a: number;
  b: string;

  constructor(x: number) {
    this.a = x;
    this.b = "yy";
  }

  someMethod(): string {
    return `${this.a} ${this.b}`;
  }
}

class ExtClass extends BaseClass {
  c: boolean;

  constructor() {
    super(10);
    this.c = false;
  }

  //ta sama nazwa, parametry, typ zwracny
  someMethod(): string {
    return `${this.a} ${this.b} ${this.c}`;
  }
}

let xc: BaseClass = new ExtClass();

console.log(xc.someMethod());
