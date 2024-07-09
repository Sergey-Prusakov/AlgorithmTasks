// 15

// Напишите свой полифил для [].map()

Array.prototype.customMap = function (callback, thisArg = undefined) {
    if (typeof callback !== 'function') {
        throw new Error(`${callback} is not a function`)
    }

    let innerArr = [];

    for (let i = 0; i < this.length; i++) {
        innerArr[i] = callback.call(thisArg, this[i], i, this)
    }

    return innerArr
}

let array = [0, 1, 2];

console.log(array.customMap((elem) => {
    return elem * 10
}));