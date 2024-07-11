// 25 
//  избавиться от дубликатов букв, которые стоят друг за другом.

// // Пример использования:
// const result = uniqueNonConsecutiveElements("hello");
// console.log(result); // Output: ['h', 'e', 'l', 'o']


const uniqueNonConsecutiveElements = (str) => {
    const res = [str[0]];

    for (let i = 1; i < str.length; i++) {
        if (res[res.length - 1] !== str[i]) {
            res.push(str[i])
        }
    }

    return res;
}

const result = uniqueNonConsecutiveElements("hello");
console.log(result); // Output: ['h', 'e', 'l', 'o']