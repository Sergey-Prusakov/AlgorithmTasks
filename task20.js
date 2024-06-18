// 20

// Создать функцию inverse, которая заменит 1 на 0 и наоборот 
// во всем дереве.

const inverse = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            inverse(obj[key]); // Рекурсивный вызов для вложенного объекта
        } else {
            obj[key] = Number(!obj[key])
        }
    }
    return JSON.stringify(obj);
}

const tree = {
    a: {
        a: 1,
        b: {
            a: 0,
            b: 1
        },
        c: 0
    },
    b: 0,
    c: 1
};

console.log(inverse(tree));