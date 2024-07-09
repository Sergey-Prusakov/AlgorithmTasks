// 14

// Есть несколько слов, определить состоят ли они из одних 
// и тех же букв
// например 
// matchCharacters('кот', 'ток', 'окт') --> true
// matchCharacters('кот', 'ком') --> false
// matchCharacters('аларм', 'малар', 'армал', 'рамал') --> true

const matchCharacters = (...args) => {
    let res = true;
    let sortedArguments = args.map((elem, i) => {
        return elem.split('').sort().join('');
    });

    for (let i = 1; i < sortedArguments.length; i++) {
        if (sortedArguments[0] !== sortedArguments[i]) {
            res = false;
            break;
        }
    }

    return res
}

console.log(matchCharacters('кот', 'ток', 'окт'));
console.log(matchCharacters('кот', 'ком'));
console.log(matchCharacters('аларм', 'малар', 'армал', 'рамал'));