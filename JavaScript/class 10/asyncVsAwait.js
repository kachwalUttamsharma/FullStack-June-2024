const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(5);
    }, 3000);
  });
};

// promise().then((data) => {
//   console.log(data);
// });

console.log(3);
const data = async () => {
  try {
    const result = await promise();
    console.log(result);
    return result;
  } catch (err) {
    console.log("err from catch block : ", err);
  }
};
console.log(data());
console.log(10);
