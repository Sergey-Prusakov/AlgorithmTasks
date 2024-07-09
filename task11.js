// 11

// Напишите функцию для бинарного поиска, она должна принимать
// отсортированный массив и элемент который ищем

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const sort = (arr, elem) => {
    if (arr[arr.length / 2] > elem) {
        arr.splice((arr.length / 2), arr.length - 1)
    } else {
        arr.splice(0, ((arr.length) / 2))
    }
    
    for (let i in arr) {
        if (arr[i] === elem) {
            return i
        }
    }
}

console.log(sort(array, 3));