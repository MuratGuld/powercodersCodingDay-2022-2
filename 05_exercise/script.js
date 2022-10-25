let books = [
  { title: "Harry Potter", author: "J. K. Rowling", price: 25, inStock: true },
  {
    title: "Lord of the Ri",
    author: "J. R. R. Tolkien",
    price: 10,
    inStock: true,
  },
  {
    title: "After the Funeral",
    author: "Agatha Christie",
    price: 20,
    inStock: false,
  },
];

// sort alphabetically
books.sort((a, b) => {
  return a.title.localeCompare(b.title);
});

// I got first item of array to access its keys and show
let keys = Object.keys(books[0]);
let thead = document.querySelector("thead");
let tr = document.createElement("tr");

keys.forEach((key) => {
  let th = document.createElement("th");
  let thText = document.createTextNode(key);
  th.appendChild(thText);
  tr.appendChild(th);
  thead.appendChild(tr);
});

// get books detailed in table body
let tbody = document.querySelector("tbody");

books.forEach((book) => {
  let tr = document.createElement("tr");

  Object.values(book).forEach((value) => {
    let td = document.createElement("td");
    let tdText = document.createTextNode(value);
    td.appendChild(tdText);
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});

if (document.getElementById("true-inStock").checked == true) {
  console.log("ture selected");
} else if (document.getElementById("false-inStock").checked == true) {
  console.log("false selected");
}

// add book to list
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  let newBook = {};

  e.preventDefault();
  newBook.title = document.querySelector("#title").value;
  newBook.author = document.querySelector("#author").value;
  newBook.price = document.querySelector("#price").value;

  if (document.getElementById("true-inStock").checked == true) {
    newBook.inStock = true;
  } else {
    newBook.inStock = false;
  }

  books.push(newBook);

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#true-inStock").checked = false;
  document.querySelector("#false-inStock").checked = false;
  tbody.innerText = "";
  books.forEach((book) => {
    let tr = document.createElement("tr");

    Object.values(book).forEach((value) => {
      let td = document.createElement("td");
      let tdText = document.createTextNode(value);
      td.appendChild(tdText);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
});
