// 26 
// написать функцию, которая будет принимать массив, удалять 
// дубликаты и сортировать его

const sortAndDelDupl = (arr) => {

    /* let temp = 0;
    for (let i in arr) {
        for (let j in arr) {
            if (arr[i] < arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    } */

    /* let res = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
     if (arr[i] !== arr[i - 1]) {
         res.push(arr[i])
         }
         } */

    return arr = [... new Set(arr.sort())]
}

const array = [5, 3, 7, 9, 1, 3, 0, 5, 0, 3]

console.log(sortAndDelDupl(array));