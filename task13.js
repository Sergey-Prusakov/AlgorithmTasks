// 13

// Дана функция, она принимает в качестве 
// аргументов строки '-', '1', 'b', '1c', реализуйте ее так,
// чтобы она вернула строку '1-b-1c'

const combineString = (intMed, first, second, third) => {
    return first + intMed + second + intMed + third
}

console.log(combineString('-', '1', 'b', '1c'));
