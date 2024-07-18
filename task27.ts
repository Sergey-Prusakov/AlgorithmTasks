// 27 

// напишите свой Promise.all и Promise.allSettled, на TS 
export { }

const p1: Promise<number> = Promise.resolve(3);
const p2: number = 1337;
const p3: Promise<string> = new Promise((resolve) => {
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

