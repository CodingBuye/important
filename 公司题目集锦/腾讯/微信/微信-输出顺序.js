// var name = "first";
 
// (function foo() {
//     var name = "second";
//     console.log(this.name); // first
// })();
// console.log(this.name);     // first

/**
 * ***************************************************************
 */

// var name = "global name";
 
// var a = {
//     name: "name A",
//     func: function () {
//         console.log(this.name);
//     },
// };
 
// a.func(); //  "name A"
// window.a.func(); //  "name A"
 
// var func = a.func;
// func(); // "global name"
 
// func = window.a.func;
// func(); // "global name"

/**
 * ***************************************************************
 */
var foo = { n: 1 };
(function (foo) {
    var foo;
    console.log(foo.n); // 1
    foo.n = 3;
    var foo = { n: 2 };
    console.log(foo.n); // 2
})(foo);
 
console.log(foo.n); // 3