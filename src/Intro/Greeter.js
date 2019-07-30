"use strict";
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.message = "Hellooo";
    }
    Greeter.prototype.greet = function () {
        return this.message;
    };
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
