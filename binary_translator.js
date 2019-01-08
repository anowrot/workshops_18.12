function toBinary(number) {
  if (number < 0) {
    console.log("number must be greater than 0")
  }

  let highestPower = Math.floor(Math.log2(number));
  let binary = new Array(highestPower + 1).fill(0);


  binary.reduce(function(rest, currentNumber){
    let power = Math.floor(Math.log2(rest));
    if (rest === 0){
      return rest;
    }
    else {
      currentNumber = rest - Math.pow(2, power)
      binary[power] = 1;
      return currentNumber;
    }

  }, number);
  binary.reverse()
console.log(binary.join(""))
}


toBinary(15)

