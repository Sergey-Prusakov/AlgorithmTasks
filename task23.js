// 23 
// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

/* function createCopy (data){ // Перед фигурной скобкой должен быть пробел
    const copy = { // Для создания копии объекта можно использовать неглубокое копирование
        meta: data.meta,
        age : data.age, // Не должно быть проблеа перед :
        setting : data.setting
    }
    const title = `new copy ${data.setting.title}` // Нет смысла выносить это в отдельную переменную. И нет ;
    return copy;
    copy.setting.title = title
    return copy;
} */

function createCopy(data) {
    const copy = structuredClone(data);
    copy.setting.title = `new copy ${data.setting.title}`;
    return copy;
}

const object = {
    meta: 'meta',
    age: 18,
    setting: {
        title: "name"
    }
}

console.log(createCopy(object));