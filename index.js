let numbers = {
  a : 2,
  b : 4
};

function result (numbers){
  let swap = numbers.a;
  numbers.a = numbers.b;
  numbers.b = swap;

  return numbers;
}

console.log(result(numbers));