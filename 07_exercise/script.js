function weekNumbersToWords(array) {
  array.forEach((element, i) => {
    switch (element) {
      case 1:
        array[i] = "Monday";
        break;
      case 2:
        array[i] = "Tuesday";
        break;
      case 3:
        array[i] = "Wednesday";
        break;
      case 4:
        array[i] = "Thursday";
        break;
      case 5:
        array[i] = "Friday";
        break;
      case 6:
        array[i] = "Saturday";
        break;
      case 7:
        array[i] = "Sunday";
        break;
      default:
        break;
    }
  });

  console.log(array);
}

let arrayOfNumbers = [1, 4, 6, 3, 2];

weekNumbersToWords(arrayOfNumbers);
