// 11

// Напишите функцию для бинарного поиска, она должна принимать
// отсортированный массив и элемент который ищем

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const sort = (arr, elem) => {
    let searchStart = 0;
    if (arr[arr.length / 2 - 1] < elem) {
        searchStart = arr.length / 2 - 1
    }
    
    for (let i = searchStart; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i
        }
    }
}

console.log(sort(array, 6));