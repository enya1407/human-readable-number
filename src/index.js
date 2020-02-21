module.exports = function toReadable(number) {
  let threeDigit = "";
  let doubleDigit = "";
  let simple = "";

  let arr = number.toString().split("");
  if (number === 0) {
    return "zero";
  } else if (number < 10) {
    arr.unshift("0", "0");
  } else if (number < 100) {
    arr.unshift("0");
  }

  switch (arr[2]) {
    case "1":
      simple = "one";
      break;
    case "2":
      simple = "two";
      break;
    case "3":
      simple = "three";
      break;
    case "4":
      simple = "four";
      break;
    case "5":
      simple = "five";
      break;
    case "6":
      simple = "six";
      break;
    case "7":
      simple = "seven";
      break;
    case "8":
      simple = "eight";
      break;
    case "9":
      simple = "nine";
      break;
  }

  if (arr[2] === "0") {
    switch (arr[1]) {
      case "2":
        doubleDigit = "twenty";
        break;
      case "3":
        doubleDigit = "thirty";
        break;
      case "4":
        doubleDigit = "forty";
        break;
      case "5":
        doubleDigit = "fifty";
        break;
      case "6":
        doubleDigit = "sixty";
        break;
      case "7":
        doubleDigit = "seventy";
        break;
      case "8":
        doubleDigit = "eighty";
        break;
      case "9":
        doubleDigit = "ninety";
        break;
    }
  } else {
    switch (arr[1]) {
      case "2":
        doubleDigit = "twenty ";
        break;
      case "3":
        doubleDigit = "thirty ";
        break;
      case "4":
        doubleDigit = "forty ";
        break;
      case "5":
        doubleDigit = "fifty ";
        break;
      case "6":
        doubleDigit = "sixty ";
        break;
      case "7":
        doubleDigit = "seventy ";
        break;
      case "8":
        doubleDigit = "eighty ";
        break;
      case "9":
        doubleDigit = "ninety ";
        break;
    }
  }

  if (arr[1] === "1") {
    switch (arr[2]) {
      case "0":
        simple = "ten";
        break;
      case "1":
        simple = "eleven";
        break;
      case "2":
        simple = "twelve";
        break;
      case "3":
        simple = "thirteen";
        break;
      case "4":
        simple = "fourteen";
        break;
      case "5":
        simple = "fifteen";
        break;
      case "6":
        simple = "sixteen";
        break;
      case "7":
        simple = "seventeen";
        break;
      case "8":
        simple = "eighteen";
        break;
      case "9":
        simple = "nineteen";
        break;
    }
  }

  switch (arr[0]) {
    case "1":
      threeDigit = "one hundred ";
      break;
    case "2":
      threeDigit = "two hundred ";
      break;
    case "3":
      threeDigit = "three hundred ";
      break;
    case "4":
      threeDigit = "four hundred ";
      break;
    case "5":
      threeDigit = "five hundred ";
      break;
    case "6":
      threeDigit = "six hundred ";
      break;
    case "7":
      threeDigit = "seven hundred ";
      break;
    case "8":
      threeDigit = "eight hundred ";
      break;
    case "9":
      threeDigit = "nine hundred ";
      break;
  }
  if (arr[1] === "0" && arr[2] === "0") {
    switch (arr[0]) {
      case "1":
        threeDigit = "one hundred";
        break;
      case "2":
        threeDigit = "two hundred";
        break;
      case "3":
        threeDigit = "three hundred";
        break;
      case "4":
        threeDigit = "four hundred";
        break;
      case "5":
        threeDigit = "five hundred";
        break;
      case "6":
        threeDigit = "six hundred";
        break;
      case "7":
        threeDigit = "seven hundred";
        break;
      case "8":
        threeDigit = "eight hundred";
        break;
      case "9":
        threeDigit = "nine hundred";
        break;
    }
  }

  let result = `${threeDigit}${doubleDigit}${simple}`;

  return result;
};
