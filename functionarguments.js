/*
"Why does changing the value of what change the value of arguments[0]?"
Because that's how it's designed to work. The formal parameters are directly mapped to the indices of the arguments object.

That is unless you're in strict mode, and your environment supports it. Then updating one doesn't effect the other.
*/
function hello(what) {
    "use strict"; // <-- run the code in strict mode
    what = "world";
    return "Hello, " + arguments[0] + "!";
}
hello("shazow"); // "Hello, shazow!"

function ff(b){
    b = 2;
    console.log(arguments[0]);
}
ff(12);

