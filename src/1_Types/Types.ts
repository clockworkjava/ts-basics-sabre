{
// let/const <nazwa zmiennej> : <typ> = <wartość>

let answer : string = '42';
//również znane z ES6 template stringi
let longOne : string =  `multi line
                          string with temaplete ${answer}`
let flag : boolean = true;

let age : number = 34;
let plnToUsd : number = 3.4325;

let bigOne : number = 1_000_102_312.0;

// Jak z 'let' zrobić 'const', typy jako zbiory potencjalnych wartości

let x : number = 42;
let pleaseDontChangeMe : "Final Value"  = "Final Value";
x = 44;

console.log(x);
console.log(pleaseDontChangeMe);

pleaseDontChangeMe = "Final Value";

let d6 : 1 | 2 | 3 | 4 | 5 | 6 = 5;

// standardowe tablice, nic specjalnego

const z : number[] = [1,2,3,4];

z.push(3)
//z.push("Pawel");

// krotki, czyli tablice z określoną wielkościa i typem danych

const touple : [string, number, 1 | 2 | 3] = ["Pawel", 32, 2];

console.log(touple[2]); // TS jest w stanie wydobyć typ konkretnego indeksu


// natomiast wada jest to, ze mozemy dodawac do krotki co chcemy
touple.push("hej");
touple.push(5);
touple.push(5);

// no prawie.. tak dlugo jak jest jednym z okreslonych typow
//touple.push(true);

console.log(touple);

const map : [string, number][] = [["key", 132], ["key1", 23.3]];

map.forEach( entry => {
    console.log(entry[0], entry[1]);
})

// tsc - typy to iluzja

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 

//void

// let warnUser: void = () => console.log("This is my warning message");
let warnUser = () => console.log("This is my warning message");

let unusable: void = undefined;

// let unusable2: void = null;

let anything : any = () => console.log("any");
anything = 5;
anything = {};

// Dedukcja typów

let someNumber = 32;

let someString = "aa";

const someConst = "const";
}