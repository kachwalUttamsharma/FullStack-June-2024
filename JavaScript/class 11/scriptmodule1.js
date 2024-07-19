var a = 10;
let b = 20;

const fn = () => {
  console.log("from script 1", b);
};

console.log("from script 1", a);

// named export
// default export

export default function sum(p1, p2) {
  return p1 + p2;
}
export { a, b, fn };
