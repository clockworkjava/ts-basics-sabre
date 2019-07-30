"use strict";
function wrap(x) {
    return {
        value: x
    };
}
var x = wrap(5);
console.log(JSON.stringify(x));
// wrap<number>("pawel");
