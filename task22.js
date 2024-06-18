// 22
// напишите функцию которая при каждом вызове будет увеличивать внутренний 
// счетчик на 1 
// ! внешних переменных создать нельзя
// console.log(inc(), inc(), inc()) // 1, 2, 3


function createCounter() {
    let count = 0; // переменная count доступна только внутри функции createCounter

    return function() {
        count += 1; // увеличиваем значение count на 1 при каждом вызове
        return count; // возвращаем текущее значение count
    };
}

const inc = createCounter();

console.log(inc());
console.log(inc());
console.log(inc());
