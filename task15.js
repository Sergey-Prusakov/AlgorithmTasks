// 15

// Напишите свой полифил для [].map()

Array.prototype.customMap = function (cbFunc, thisArg = undefined) {
    if (typeof cbFunc !== 'function') {
        throw new Error(`${cbFunc} is not a function`)
    }

    let innerArr = [];

    for (let i = 0; i < this.length; i++) {
        innerArr[i] = cbFunc.call(thisArg, this[i], i, this)
    }

    return innerArr
}

let array = [0, 1, 2];

console.log(array.customMap((elem) => {
    return elem * 10
}));