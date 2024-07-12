// 26 
// написать функцию, которая будет принимать массив, удалять 
// дубликаты и сортировать его

const sortAndDelDupl = (arr) => {
    return arr = [... new Set(arr.sort())]
}

const array = [5, 3, 7, 9, 1, 3, 0, 5, 0, 3]

console.log(sortAndDelDupl(array));