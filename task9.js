// 9

// Необходимо реализовать функцию getNumberCharacters, которая
// считает количество символов в строке и выводит
//  *количество символов**символ* 

// Пример aaabbcaff → выведет 3a2b1c1a2f

const string = 'aaabbcaff';

let getNumberCharacters = (str) => {
    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += count + str[i - 1];
            count = 1;
        }
    }

    return result;
}

console.log(getNumberCharacters(string));