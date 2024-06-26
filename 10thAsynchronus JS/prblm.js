// let array = [1,2,3,4,5]
// let size = 2
// function chunkArray(array, size) {
//     const result = [];
//     for (let i = 0; i < array.length(); i += size) {
//         result.push(array.slice(i, i + size));
//     }
//     return result;
// }

// console.log(chunkArray())

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
  });
  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
  });
  Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

  setInterval(() => console.log('Hi'), 1000);
