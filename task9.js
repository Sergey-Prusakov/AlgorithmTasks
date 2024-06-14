// 9

// Необходимо реализовать функцию getNumberCharacters, которая
// считает количество символов в строке и выводит
//  *количество символов**символ* 

// Пример aaabbcaff → выведет 4a2b1c1a2f *** Тут опечатка?

const string = 'aaabbcaff';

let getNumberCharacters = (str) => {
    let res = '';
    let uniqElements = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] && !uniqElements.includes(str[j])) {
                uniqElements += str[j]
            }
        }
    }

    for (let i in uniqElements) {
        res += (str.split(uniqElements[i]).length - 1) + uniqElements[i]
    }

    return res
}

console.log(getNumberCharacters(string));
