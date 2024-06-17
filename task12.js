// 12

// Написать функцию которая будет строить “шахматную доску”
// Пример работы:

const createBoard = (size) => {
    let res = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i % 2 === 0) {
                res += '_#';
            } else {
                res += '#_';
            }
        }
        res += '\n'
    }
    return res;
}

console.log(createBoard(7));
// _#_#_#_#_#
// #_#_#_#_#_
// _#_#_#_#_#
// #_#_#_#_#_
// _#_#_#_#_#
