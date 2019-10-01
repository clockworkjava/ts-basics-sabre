interface WrapType<T> {
  value: T;
}

function wrap<T>(x: T): WrapType<T> {
  return {
    value: x
  };
}

const x: WrapType<number> = wrap<number>(5);

console.log(JSON.stringify(x));

wrap("pawel");

interface TMP {
  description: string;
}

interface Other<T extends TMP> {
  value: T;
}

interface TA {
  a: number;
  description: string;
}

let azx: Other<TA> = {
  value: {
    a: 5,
    description: "ala"
  }
};

interface YetAnother<T = string> {
  value: T;
}

//error
//let mnb: YetAnother = {
//  value: 5
//};
let mnb: YetAnother<number> = {
  value: 5
};
