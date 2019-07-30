{
class BaseClass {

    private a: number;
    private b: string;

    constructor() {
        this.a = 0;
        this.b = '';
    }

    protected someMethod () : string {
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
        // return `${this.a} ${this.b} ${this.c}`;
        return `${super.someMethod()} ${this.c}` ;
    }
}

let xc : BaseClass = new ExtClass();

// console.log(xc.someMethod());
}