// 19

// Реализовать алгоритм сжатия строки "AAADDDGFFFAAR" → "3A3DG3F2AR"

const string = 'AAADDDGFFFAAR';

function getNumberCharacters(str) {
    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += (count > 1 ? count : "") + str[i - 1];
            count = 1;
        }
    }

    return result;
}

console.log(getNumberCharacters(string));