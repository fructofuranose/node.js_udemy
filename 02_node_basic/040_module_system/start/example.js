// const calc = require('./calc.js');
// ./ は example.jsからの相対パス
const {plus} = require('./calc.js');

// const result = calc.plus(1, 2);
const result = plus(1, 2);
console.log(result);
