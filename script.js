const capitalize = (string) => `${(string.slice(0, 1)).toUpperCase()}${string.slice(1, string.lenght)}`;

const reverseString = (string) => {
  const stringArray = string.split('');
  const reverseArray = stringArray.reverse();
  let reverseStr = '';
  reverseArray.forEach((character) => {
    reverseStr += character;
  });
  return reverseStr;
};

const calculator = {
  sum(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

const caesarCipher = (string, key) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const charCodeArray = [];
  (string.split('')).forEach((character) => {
    if (alphabet.includes(character.toLowerCase())) {
      charCodeArray.push(alphabet.findIndex((cur) => {
        if (character.toLowerCase() === cur) {
          return cur;
        }
      }));
    } else {
      charCodeArray.push(character);
    }
  });

  const arrayCipher = [];
  charCodeArray.forEach((character) => {
    if (typeof character === 'number') {
      arrayCipher.push((character + key) % 26);
    } else {
      arrayCipher.push(character);
    }
  });

  let stringCipher = '';
  for (let i = 0; i < arrayCipher.length; i += 1) {
    if (typeof arrayCipher[i] === 'number') {
      if (string[i] === string[i].toUpperCase()) {
        stringCipher += (alphabet[arrayCipher[i]]).toUpperCase();
      } else {
        stringCipher += alphabet[arrayCipher[i]];
      }
    } else {
      stringCipher += arrayCipher[i];
    }
  }

  return stringCipher;
};

export {
  capitalize, reverseString, calculator, caesarCipher,
};
