// 21 напишите кастомный Flat, протипизируйте его

const test = [
    1,
    2,
    [[3], 4, [5, [11], 9]],
    {
        one: 1,
        two: {
            bar: 'pop',
            three: {
                foo: 33,
                name: 'oleg',
                olga: true,
                unic: { in: 'in' }
            }
        }
    },
    ['098', [33, 44, [[12], 1, [56]]]]
];

function flat(input) {
    let result = [];

    function helper(value) {
        if (Array.isArray(value)) {
            value.forEach(helper);
        } else if (typeof value === 'object') {
            let flatObject = {};
            for (let key in value) {
                if (typeof value[key] === 'object') {
                    helper(value[key]);
                } else {
                    flatObject[key] = value[key];
                }
            }
            result.push(flatObject);
        } else {
            result.push(value);
        }
    }

    helper(input);
    return JSON.stringify(result);
}

console.log(flat(test)) // должно вернуть [1, 2, 3, 4, 5, 11, 9, { one: 1, bar : 'pop', foo: 33, name: 'oleg', olga: true, in: 'in' }, '098', 33, 44, 12, 1, 56]

const test2 = {
    foo: {
        one: 1,
        two: {
            bar: 'pop',
            three: {
                foo2: 33,
                name: 'oleg',
                olga: true,
                unic: { in: 'in' }
            }
        },
        abc: [
            1,
            2,
            [[3], 4, [5, [11], 9]],
            ['098', [33, 44, [[12], 1, [56]]]]
        ]
    },
}

console.log(flat(test2)) // вернет {one: 1, bar: 'pop', foo2: 33, name: 'oleg', olga: true, in: 'in', abc: [1, 2, 3, 4, 5, 11, 9, '098', 33, 44, 12, 1, 56]},
