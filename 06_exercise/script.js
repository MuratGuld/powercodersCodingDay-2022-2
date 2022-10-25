let itemsArray = ["Chair", "Table", "Window", "Bag", "Radio", "Television"];

function getLastValue(array) {
  array.sort();
  console.log(array[array.length - 1]);
}

getLastValue(itemsArray);
