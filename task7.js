// 7

// написать функцию суммирования, которая работает в двух режимах

function sum(a, b) {
    if (b) {
        return a + b;
    }
    return function (c) {
        return a + c;
    };

}

console.log(sum(1, 2)); // Вывод: 3
console.log(sum(1)(2)); // Вывод: 3
