// 13

// Дана функция, она принимает в качестве 
// аргументов строки '-', '1', 'b', '1c', реализуйте ее так,
// чтобы она вернула строку '1-b-1c'

const combineString = (separator, ...args) => {
    let res = args[0];
    for (let i = 1; i < args.length; i++) {
        res += separator + args[i]
    }
    return res
}

console.log(combineString('-', '1', 'b', '1c'));