// 16

// Анаграммы – это слова, у которых те же буквы в том же количестве,
// но они располагаются в другом порядке.

// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов,
// очищенный от анаграмм.

const aclean = (arr) => {
    let sortedArguments = arr.map((elem, i) => {
        return elem.split('').sort().join('');
    });

    for (let i = 0; i < sortedArguments.length; i++) {
        for (let j = 0; j < sortedArguments.length; j++) {
            if (sortedArguments[i].toLowerCase() === sortedArguments[j].toLowerCase() && i !== j) {
                console.log(sortedArguments[i], sortedArguments[j]);
                sortedArguments.splice(j, 1);
                arr.splice(j, 1);
            }
        }
    }

    return arr
}

// Например
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(array)); // "nap,teachers,ear" или "PAN,cheaters,era"

// Из каждой группы анаграмм должно остаться только одно слово,
// не важно какое.
