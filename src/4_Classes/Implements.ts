{

interface Base {
    a: number;
    b: string;
    someMethod() : string;
}

class ImplClass implements Base {

    // rzeczy określone przez interfejs muszą być publiczne
    // private a: number;
    public a : number;
    public b: string;
    public c: boolean;

    constructor() {
        this.a = 1;
        this.b = "a";
        this.c = false;
    }

    public someMethod () : string {
        return `${this.c}` ;
    }
}

class ImplClass2 implements Base {


    public a : number;
    public b: string;

    constructor() {
        this.a = 1;
        this.b = "a";
    }

    public someMethod () : string {
        return `hello` ;
    }
}


// mamy dostep do rzeczy z base i jest wołana implementacja z konkretnej klasy
let xc : Base = new ImplClass();
let xd : Base = new ImplClass2();


//deklarujac xc jako typ Base, nie mamy dostpu do rzeczy z konrketnych implelemtacji
// xc.c
}