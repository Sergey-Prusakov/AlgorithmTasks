"use strict";
// 27 
exports.__esModule = true;
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise(function (resolve) {
    setTimeout(resolve, 2000, "foo");
});
Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values);
});
Promise.allSettled([p1, p2, p3]).then(function (values) {
    console.log(values);
});
