import { helloFromSub } from "./sub.js";
import isOdd from "is-odd";
//  const { helloFromSub } = require('./sub.js');
helloFromSub();
const oddy = isOdd(3);
console.log(oddy);