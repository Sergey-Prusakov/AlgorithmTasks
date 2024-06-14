// 2

// Представьте что вам нужно записать в переменную arr  массив из 50 
// элементов, со значениями от 1 до 50, соответственно, как вы это сделаете?

// Способ 1

let arr2 = new Array(50);

for (let i = 0; i < arr2.length; i ++) {
	arr2[i] = i + 1;
}

console.log('arr2', arr2)

// Способ 2

console.log(Array.from({ length: 50 }, (elem, i) => i + 1)) 
