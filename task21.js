// 21 напишите кастомный Flat, протипизируйте его
function flat(input) {
    if (Array.isArray(input)) {
        return flattenArray(input);
    }
    else if (typeof input === 'object') {
        return flattenObject(input);
    }
    else {
        return input;
    }
}
function flattenArray(arr) {
    var result = [];
    arr.forEach(function (item) {
        if (Array.isArray(item)) {
            console.log(result, item);
            result.push.apply(result, flattenArray(item));
        }
        else if (typeof item === 'object') {
            result.push(flattenObject(item));
        }
        else {
            result.push(item);
        }
    });
    return result;
}
function flattenObject(obj) {
    var result = {};
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (Array.isArray(value)) {
            result[key] = flattenArray(value);
        }
        else if (typeof value === 'object' && value !== null) {
            var flatObject = flattenObject(value);
            for (var _c = 0, _d = Object.entries(flatObject); _c < _d.length; _c++) {
                var _e = _d[_c], nestedKey = _e[0], nestedValue = _e[1];
                result[nestedKey] = nestedValue;
            }
        }
        else {
            result[key] = value;
        }
    }
    return result;
}
// Пример использования
var test1 = [
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
                unic: { "in": 'in' }
            }
        }
    },
    ['098', [33, 44, [[12], 1, [56]]]]
];
console.log(JSON.stringify(flat(test1)));
// [1, 2, 3, 4, 5, 11, 9, { one: 1, bar: 'pop', foo: 33, name: 'oleg', olga: true, in: 'in' }, '098', 33, 44, 12, 1, 56]
var test2 = {
    foo: {
        one: 1,
        two: {
            bar: 'pop',
            three: {
                foo2: 33,
                name: 'oleg',
                olga: true,
                unic: { "in": 'in' }
            }
        },
        abc: [
            1,
            2,
            [[3], 4, [5, [11], 9]],
            ['098', [33, 44, [[12], 1, [56]]]]
        ]
    }
};
console.log(JSON.stringify(flat(test2)));
// {one: 1, bar: 'pop', foo2: 33, name: 'oleg', olga: true, in: 'in', abc: [1, 2, 3, 4, 5, 11, 9, '098', 33, 44, 12, 1, 56]}
