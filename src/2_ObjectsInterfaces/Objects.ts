// wydeukowanie typu przez TS

let person = {
    name: 'Pawel',
    age: 32
}

// Typy wprost

let personTyped : { name: string, age: number} = {
    name: 'Pawel',
    age: 32 
}


// za mało pól
// personTyped = {
//     name: 'P',
//     streetNumber: 3
// }

// za dużo...
// personTyped = {
//     name: 'Michał',
//     age: 43,
//     email: 'a@a.com'
// }

let personWithOptionalEmail : { name: string, age: number, email?: string} = {
    name: 'Michał',
    age: 43,
    email: 'a@a.com'
} 

personWithOptionalEmail = {
    name: 'Michał',
    age: 43
}

interface PersonalInfo {
    name: string,
    age: number,
    email?: string
}

let someone : PersonalInfo = {
    name: 'john',
    age: 22
}

