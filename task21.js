// 21 напишите кастомный Flat, протипизируйте его

function flat(input) {
    if (Array.isArray(input)) {
        return flattenArray(input);
    } else if (typeof input === 'object' && input !== null) {
        return flattenObject(input);
    } else {
        return input;
    }
}

function flattenArray(arr) {
    const result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else if (typeof item === 'object' && item !== null) {
            result.push(flattenObject(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

function flattenObject(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            result[key] = flattenArray(value);
        } else if (typeof value === 'object' && value !== null) {
            const flatObject = flattenObject(value);
            for (const [nestedKey, nestedValue] of Object.entries(flatObject)) {
                result[nestedKey] = nestedValue;
            }
        } else {
            result[key] = value;
        }
    }
    return result;
}

const test1 = [
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

console.log(JSON.stringify(flat(test1)));
// [1, 2, 3, 4, 5, 11, 9, { one: 1, bar: 'pop', foo: 33, name: 'oleg', olga: true, in: 'in' }, '098', 33, 44, 12, 1, 56]

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
};

console.log(JSON.stringify(flat(test2)));
// {one: 1, bar: 'pop', foo2: 33, name: 'oleg', olga: true, in: 'in', abc: [1, 2, 3, 4, 5, 11, 9, '098', 33, 44, 12, 1, 56]}
