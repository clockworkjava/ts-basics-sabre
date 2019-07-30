interface Base {
    a: number;
    b: string;
  }
  
  interface Ext extends Base { 
    c: boolean;
  }
  
  let ax: Base = { a: 5, b: "a" };
  
  let ac: Ext = { a: 15, b: "b", c: true };
  
  let xx: Base = ac; 



  class BaseClass {

    a: number;
    b: string;

    constructor() {
        this.a = 0;
        this.b = '';
    }

    someMethod () : string {
        return `${this.a} ${this.b}`;
    }
}

class ExtClass extends BaseClass {

    c: boolean;

    constructor() {
        super();
        this.c = false;
    }

    //ta sama nazwa, parametry, typ zwracny
    someMethod () : string {
        return `${this.a} ${this.b} ${this.c}`;
    }
}

let xc : BaseClass = new ExtClass();

console.log(xc.someMethod()); // < polimorfizm

