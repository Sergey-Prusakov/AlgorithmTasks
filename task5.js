// 5

// Задача: Реализовать функцию add у числа, 
// которая принимает значение и добавляет его к числу

// например: console.log(1.add(30)) // выведет 31

Number.prototype.add = function (a) {
    console.log(this);
    return this + a
}

console.log(1..add(30))
