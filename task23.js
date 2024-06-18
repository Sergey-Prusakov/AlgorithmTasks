// 23 
// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

function createCopy(data) {
    const copy = {
        meta: data.meta,
        age: data.age,
        setting: data.setting
    }
    const title = `new copy ${data.setting.title}`
    copy.title = title
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