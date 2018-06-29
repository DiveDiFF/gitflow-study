function fizzbuzz(int) {
  let arr = [];

  for (let i = 1; i <= int; i++) { arr.push(i); }
  return arr.map(item => {
    let str = '';
    if (item % 3 === 0) {
      str = 'fizz'
    }

    if (item % 5 === 0) {
      str = 'buzz'
    }
    return str ? str : item;
  })
}


console.log(fizzbuzz(30));