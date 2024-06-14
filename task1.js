// 1

// Есть список эндпойнтов. Нужно сделать запросы последовательно
// на каждый эндпойнт, передавая в каждом последующем запросе
// результат ответа предыдущего запроса. Какими способами можно 
// это сделать это в JS?

const endPoints = [
    'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham',
    'https://jsonplaceholder.typicode.com/todos?userId=*V2',
    'https://jsonplaceholder.typicode.com/todos/*V3'
]

// *V2 - тут id пользователя полученного в прошлом запросе.
// *V3 - тут id последней таски, полученной во втором запросе

// Способ 1
const func = async () => {
    const data1 = await fetch(endPoints[0])
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            console.error(err);
        });
    console.log(data1);

    const data2 = await fetch(endPoints[1].replace('*V2', data1[0].id))
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            console.error(err);
        });
    console.log(data2);

    const data3 = await fetch(endPoints[2].replace('*V3', data2[data2.length - 1].id))
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            console.error(err);
        });
    console.log(data3);
}

func() 

// Способ 2

new Promise(function (resolve, reject) {

    const data1 = fetch(endPoints[0])
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            console.error(err);
        });

    resolve(data1)

}).then(function (res) {
    console.log(res);

    const data2 = fetch(endPoints[1].replace('*V2', res[0].id))
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            console.error(err);
        });
    return data2

}).then(function (res) {
    console.log(res);

    const data3 = fetch(endPoints[2].replace('*V3', res[res.length - 1].id))
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            console.error(err);
        });
    return data3
}).then(function (res) {
    console.log(res);
})
