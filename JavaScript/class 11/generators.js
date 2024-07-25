function* generators() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (error) {
    console.log(error);
  }
}

const gen = generators();

console.log(gen.next().value);
