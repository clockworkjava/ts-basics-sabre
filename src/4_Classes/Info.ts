class Info {
  private name: string;
  private email: string;
  private preferences: string[];

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.preferences = [];
  }

  public toString = () => {
    return `${this.name} - ${this.email}`;
  };

  public setEmail(val: string): void {
    this.email = val;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPreferences(): string[] {
    return this.preferences;
  }

  public methodToBeOverloaded(): void;
  public methodToBeOverloaded(x: string): void;
  public methodToBeOverloaded(x: number): void;
  public methodToBeOverloaded(x?: string | number, y?: string): void {
    if (x && !y) {
      if (typeof x === "number") {
        console.log("x number");
      } else {
        console.log("x string");
      }
    } else if (x && y) {
      return console.log("x and y");
    } else {
      return console.log("empty");
    }
  }
}

let i: Info = new Info("Pawel", "cwik@cwik");

const pref: string[] = i.getPreferences();

pref.push("a");

{
  class x {
    z: number;
    constructor() {
      this.z = 4;
    }
  }

  class zz {
    v: number;
    constructor() {
      this.v = 5;
    }
  }

  let vb: x | zz = {
    z: 5
  };
}
