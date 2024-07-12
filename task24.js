// 24 что будет в консоли
console.log([[2, 1], [1, 2], [0, 3]].reduce((acc, curr) => { return acc.concat(curr)})) // [2, 1, 1, 2, 0, 3]

// Как изменится результат если убрать [2, 1] // [1, 2, 0, 3]
console.log([[1, 2], [0, 3]].reduce((acc, curr) => { return acc.concat(curr)})) // [2, 1, 1, 2, 0, 3]