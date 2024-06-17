// 10

// Есть объект
// *** Как это правильно сделать?
const tree = {
    value: 1,
    next: [
        {
            value: 2,
            next: null,
        },
        {
            value: 2,
            next: {
                value2: 4,
                next: null,
            },
        },
    ],
    foo: {
        bar: {
            baz: [
                { value: 9 },
                {
                    value: 2,
                    next: {
                        value: 4,
                        next: null,
                    },
                },
            ],
        },
        baz: 33,
        value: 1,
    },
};

let sum = (obj, key, sum) => {
    let stringObj = JSON.stringify(obj);
    console.log(stringObj.slice(stringObj.indexOf(`"${key}":`) + key.length + 3, stringObj.indexOf(`"${key}":`) + key.length + 4));
    console.log(Object.entries(obj));
    return stringObj.indexOf(`"${key}":`)
}

console.log(sum(tree, 'value')) // --> 21

// Напишите функцию которая принимает объект и название ключа, 
// и рекурсивно просчитывает все значения по ключу в объекте 
