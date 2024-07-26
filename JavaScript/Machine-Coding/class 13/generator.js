// function* simpleGenerator() {
//   try {
//     console.log("first");
//     console.log("first");
//     console.log("first");
//     console.log("first");
//     yield 1;
//     console.log("second");
//     console.log("second");
//     yield 2;
//     console.log("third");
//     console.log("third");
//     yield 3;
//   } catch (e) {
//     console.log("caught inside generator", e);
//   }
// }

// const gen = simpleGenerator();

// console.log(gen);

// console.log(gen.next());
// console.log(gen.next());
// gen.throw("An error");
// gen.return();
// console.log(gen.next());
// console.log(gen.next());

const n = 10;
function* countDown(n) {
  while (n > 0) {
    yield n--;
  }
}

for (let i = n; i >= 0; i--) {
  console.log(i);
}

const gen1 = countDown(n);

console.log(gen1.next());

async function* fetchData(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    yield data;
  }
}

(async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
  ];
  for await (const data of fetchData(urls)) {
    console.log(data);
  }
})();
