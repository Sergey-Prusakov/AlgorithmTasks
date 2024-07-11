// 22
// напишите функцию которая при каждом вызове будет увеличивать внутренний 
// счетчик на 1 
// ! внешних переменных создать нельзя
// console.log(inc(), inc(), inc()) // 1, 2, 3


function createCounter() {
    let count = 0;

    return function() {
        return ++count; 
    };
}

const inc = createCounter();

console.log(inc());
console.log(inc());
console.log(inc());