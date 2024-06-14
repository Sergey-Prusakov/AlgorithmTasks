// 7

// написать функцию суммирования, которая работает в двух режимах

function curry(f) { // curry(f) выполняет каррирование
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

console.log(sum(1, 2)); // *** Так правильно?
console.log(curriedSum(1)(2));