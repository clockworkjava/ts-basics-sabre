//bez typów, wydedukowane typy dla parametrów - any


// o co chodzi z implicit any -> TS nie ma na jakiej podstawie wydedukować typu, nawet jeśli gdzieś
// używamy tej funkcji, nie ma on możliwości sprawdzania "w góre"


// function add(a,b) {
//     return a+b;
// }

// Flaga w tsconfig.js > strict > no implicitAny

function addMe(a: number, b: number) : number {
    return a+b;
}

// arrow funcction wspierane
let func = (a : number ,b : number) : number => a+b;


// oczywiście nie jesteśmy ograniczeni do typów prymitywnych
const sMessage = (person : {name: string; age: number}) : {message: string} => {
    return {
        message: `Hi ${person.name} ${person.age}`
    }
}

// tylko ten sytnax jest troche juz zagmatwany, uprości go interface
interface PersonalInfo {
    name: string,
    age: number,
    email?: string
}

const tMessage = (person : PersonalInfo) => {
    return {
        message: `Hi {person.name} {person.age}`
    }
}

// o ile TS ma "problem" z parametrami dla funkcji, to z typem zwracanym
// już z reguły sobie radzi

const xMessage = (person : PersonalInfo) => {
    return {
        message: `Hi {person.name} {person.age}`
    }
}

// interfejsy mogą zawierać sygnatury dla funkcji

interface PersonalInfoWithTwist {
    name: string,
    age: number,
    email?: string,
    greeter?: (a : string) => string
}