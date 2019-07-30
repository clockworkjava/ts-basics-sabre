class Greeter {
    private message : string;

    constructor() {
        this.message = "Hellooo";
    }

    public greet() : string {
        return this.message;
    }
}

const greeter : Greeter = new Greeter();
console.log(greeter.greet());