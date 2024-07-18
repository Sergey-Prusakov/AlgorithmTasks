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

const makeRequest = (link) => {
    console.log(link);
    return fetch(link)
        .then(response => response.json())
        .then(data => data)
        .catch(err => {
            console.error(err);
        });
}

const func = async () => {
    const data1 = await makeRequest(endPoints[0])
    console.log(data1);

    const data2 = await makeRequest(endPoints[1].replace('*V2', data1[0].id))
    console.log(data2);

    const data3 = await makeRequest(endPoints[2].replace('*V3', data2[data2.length - 1].id))
    console.log(data3);
}

func()

// Способ 2

new Promise(function (resolve) {
    const data1 = makeRequest(endPoints[0])
    resolve(data1)
}).then(function (res) {
    console.log(res);

    const data2 = makeRequest(endPoints[1].replace('*V2', res[0].id))
    return data2

}).then(function (res) {
    console.log(res);

    const data3 = makeRequest(endPoints[2].replace('*V3', res[res.length - 1].id))
    return data3
}).then(function (res) {
    console.log(res);
}) 