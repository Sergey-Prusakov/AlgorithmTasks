// 10

// Есть объект
// Напишите функцию которая принимает объект и название ключа, 
// и рекурсивно просчитывает все значения по ключу в объекте 
// *** Как это правильно сделать?
const tree = {
    value: 1,
    next: [
        {
            value: 2,
            next: null,
        },
        {
            value: 2,
            next: {
                value2: 4,
                next: null,
            },
        },
    ],
    foo: {
        bar: {
            baz: [
                { value: 9 },
                {
                    value: 2,
                    next: {
                        value: 4,
                        next: null,
                    },
                },
            ],
        },
        baz: 33,
        value: 1,
    },
};
function sumValuesByKey(obj, key) {
    let sum = 0;
  
    function recurse(obj) {
      // Если obj - массив, проходимся по всем элементам массива
      if (Array.isArray(obj)) {
        for (let item of obj) {
          recurse(item);
        }
      } else if (typeof obj === 'object' && obj !== null) {
        // Если obj - объект, проходимся по всем ключам объекта
        for (let k in obj) {
          if (k === key) {
            sum += obj[k];
          }
          // Рекурсивно вызываем функцию для вложенных объектов
          recurse(obj[k]);
        }
      }
    }
  
    recurse(obj);
    return sum;
  }

console.log(sumValuesByKey(tree, 'value')) // --> 21

