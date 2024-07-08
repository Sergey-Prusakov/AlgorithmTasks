// 3

// Написать функцию которая будет принимать строку и возвращать объект 
// Пример работы функции:

const convertToObject = (str) => {

    const res = str.split('').reduceRight((acc, elem) => {
        return { [elem]: acc }

    }, {})

    return JSON.stringify(res);
}

console.log(convertToObject('abc')) // { a: { b: { c: {} } } }


