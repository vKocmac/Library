let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}
const openFormButton = document.querySelector(".open-form-button")
const addBookForm = document.querySelector(".add-book");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
openFormButton.addEventListener("click", () => {
  header.style.filter = "blur(2px)";
  footer.style.filter = "blur(2px)";
  openFormButton.style.filter = "blur(2px)";
  addBookForm.className = "new-add-book";


  addButton.addEventListener("click", () => {
    addBookForm.className = "add-book";
    header.style.filter = "blur(0)";
    footer.style.filter = "blur(0)";
    openFormButton.style.filter = "blur(0";
  })
});

const addButton = document.querySelector(".add-button");
const name = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
if (addButton) {
  addButton.addEventListener("click", () => {
    addBookToLibrary();
  });
}

function addBookToLibrary() {
  const newBook = new Book(name.value, author.value, Number(pages.value));
  myLibrary.push(newBook);
  console.log(myLibrary)
  createBookCard();
}

function createBookCard() {
  myLibrary.forEach((item, i) => {
    //create div

    console.log(item.name)
    console.log(item.author)
    console.log(item.pages)
  });
}
