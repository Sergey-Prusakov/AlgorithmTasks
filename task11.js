// 11

// Напишите функцию для бинарного поиска, она должна принимать
// отсортированный массив и элемент который ищем

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sort = (arr, elem) => {
    const middleId = Math.floor(arr.length / 2);
    const searchStart = arr[middleId] < elem ? middleId : 0;
    
    for (let i = searchStart; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i
        }
    }
    return 'not found'
}

console.log(sort(array, 9));
console.log(sort(array, 10));
