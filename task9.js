// 9

// Необходимо реализовать функцию getNumberCharacters, которая
// считает количество символов в строке и выводит
//  *количество символов**символ* 

// Пример aaabbcaff → выведет 4a2b1c1a2f

const string = 'aaabbcaff';

let getNumberCharacters = (str) => {
    let res = '';
    let uniqElements = '';

    uniqElements = [... new Set(str)].join('')

    for (let i in uniqElements) {
        res += (str.split(uniqElements[i]).length - 1) + uniqElements[i]
    }

    return res
}

console.log(getNumberCharacters(string));