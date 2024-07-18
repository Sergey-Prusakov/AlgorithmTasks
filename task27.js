// 27 
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, "foo");
});
const pAll = Promise.all([p1, p2, p3])
.then((values) => {
    return values
});
const pAllSettled = Promise.allSettled([p1, p2, p3])
    .then((values) => {
        return values
    });

pAll.then(res => {
    console.log(res);
});

pAllSettled.then(res => {
    console.log(res);
});

