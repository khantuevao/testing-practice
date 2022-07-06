export { capitalize, reverse, calculator, caesarCipher, analyzeArray };

function capitalize(string) {
  const strArray = string.split("");
  strArray[0] = strArray[0].toUpperCase();
  const strArrayCapd = strArray.join("");
  return strArrayCapd;
}

function reverse(string) {
  let strArray = string.split("");
  strArray = strArray.reverse();
  let strArrayRevd = strArray.join("");
  return strArrayRevd;
}

const calculator = (() => {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }

  return { add, subtract, multiply, divide };
})();

function caesarCipher(str) {
  //init variable
  let caesarString = '';
  //for each character
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    //if its a letter
    if (letter.match(/[a-z]/i)) {
      //get its code
      let code = str.charCodeAt(i);
      //if its 'z'
      if (code === 122) {
        letter = 'a';
      //if its 'Z'
      } else if (code === 90) {  
        letter = 'A';
      //if its uppercase
      } else if (code >= 65 && code <= 90) {
        letter = String.fromCharCode(code + 1);
      //if its lowercase
      } else if (code >= 97 && code <= 122) {
        letter = String.fromCharCode(code + 1);
      }
    }
    //append
    caesarString += letter;
  }
  
  return caesarString;
};

function analyzeArray(array) {
  const iV = 0;
  const sum = array.reduce((pV, cV) => pV + cV, iV);
  const ave = sum / array.length;

  const min = array.reduce((pV, cV) => Math.min(pV, cV));

  const max = array.reduce((pV, cV) => Math.max(pV, cV));

  const len = array.length;

  return {
    average: ave,
    min: min,
    max: max,
    length: len
  }
}