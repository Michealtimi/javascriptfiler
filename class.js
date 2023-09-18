let foo = "goodmorning"
console.log(foo)

let x = 10
if (x == 10) {
    console.log('x is 10');
  }

  function add(a, b) {
    return a + b;
  }
  const result = add(5, 2);
  console.log(result);

  text = ""
  let i = 0;
while (i < 5) {
    i++;
    console.log(i)
}

const message = 'Hello, world';
console.log(message);

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet("biade");

const colors = ['red', 'green', 'blue'];
console.log(colors[2]);

function calculateTotal(price, taxRate) {
    return price - (price * taxRate);
  }
  const total = calculateTotal(100, 0.2);
  console.log(total);

const age = 18;
if (age => 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1);
  }
}
console.log(numbers);