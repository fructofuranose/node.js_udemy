function fn(number) {
  return number * 2;
}

console.log(fn(2));

const fn  = (number)=>{
  return number * 2;
}

const fnArrow = (number) =>{
  return number * 2;
}

// const fnArrow = number * 2; 引数が一つ、式が一行の時
console.log(fnArrow(2));

// オブジェクト表記
const fnArrowobj = number => ({result: number * 2})