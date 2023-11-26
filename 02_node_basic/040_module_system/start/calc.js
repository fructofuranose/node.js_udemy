function plus(a, b) {
    return a + b;
  }

  function minus(a, b) {
    return a - b;
  }
console.log(exports === module.exports);

//以下は同じ意味    exprts = ...はダメ
exports.plus = plus;
module.exports = {
    // plus : plus
    // minus : minus
    plus,
    minus

};