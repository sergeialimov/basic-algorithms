function factorialize(num) {
  let fact = 1;
  for (let i = 1; i < num+1; i += 1) {
    fact *= i;
  };
  return fact;
}

console.log(factorialize(5));