var z = {
    name: 'chunming'
}

ff();

var y = 99;

function ff(){
    console.log(x);
    console.log(y);
    console.log(z.name);
    console.log(z.hobby);
}

var f2 = function ff(){
    console.log(x);
    console.log(y);
    console.log(z.name);
    console.log(z.hobby);
}
console.log('----------------------------');
f2();

console.log('----------------------------');
var x = 10;
z.hobby = 'pop';

ff();
console.log('----------------------------');
f2();