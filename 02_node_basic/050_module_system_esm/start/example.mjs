//const { plus } = require('./calc'); common js

// esmodule
import minusFn , * as calc from "./calc.mjs";  
//{ plus } from "./calc.mjs";
console.log(calc);
// const result = minusFn(1, 2);
const result = calc.default(1, 2);
// const result = calc.plus(1, 2);

console.log(result);
