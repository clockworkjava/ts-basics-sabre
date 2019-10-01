// wydeukowanie typu przez TS

let person;

person = {
  name: "Pawel",
  age: 32
};

person = { car: "x" };

// Typy wprost

let personTyped: { name: string; age: number } = {
  name: "Pawel",
  age: 32
};

// za mało pól
// personTyped = {
//      name: 'P',
//      streetNumber: 3
//  }

// za dużo...
//  personTyped = {
//      name: 'Michał',
//      age: 43,
//      email: 'a@a.com'
//  }

let personWithOptionalEmail: { name: string; age: number; email?: string } = {
  name: "Michał",
  age: 43,
  email: "a@a.com"
};

personWithOptionalEmail = {
  name: "Michał",
  age: 43
};

interface PersonalInfo {
  name: string;
  age: number;
  email?: string;
}

let someone: PersonalInfo = {
  name: "john",
  age: 22,
  email: "a@a"
};

interface Pet {
  name: string;
  age: number;
}

let neko: Pet = {
  name: "Neko",
  age: 4
};

someone = neko;
neko = someone;

{
  interface first {
    a: number;
    b: number;
  }

  interface second {
    c: number;
  }

  let x: first | second = {
    a: 5,
    b: 3
  };

  let y: first | second = {
    c: 5
  };

  let p: first | second = {
    a: 10,
    c: 4
  };

  let z: first & second = {
    a: 5,
    b: 5,
    c: 10
  };
}
