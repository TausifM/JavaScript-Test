let name = "tausif";
console.log(`hi ${name}`);

function getReasonCount() {
  return 1;
}
let interpolation = `Give me ${
  getReasonCount() == 1 ? "one good reason " : "a few reason"
}to try this`;
console.log(interpolation);
