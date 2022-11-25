let myLibrary = [];
const body = document.querySelector("body");
const main = document.querySelector("main");
let gridContainer = document.createElement("div");
let card = document.createElement("div");
let formDiv = document.querySelector(".form-div");
let info = document.querySelector(".info");

function Book(name, author, pages, read = "not yet") {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const openFormButton = document.querySelector(".open-form-button")
const addBookForm = document.querySelector(".add-book");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

openFormButton.addEventListener("click", (e) => {
  info.remove();
  header.style.filter = "blur(2px)";
  footer.style.filter = "blur(2px)";
  openFormButton.style.filter = "blur(2px)";
  gridContainer.style.filter = "blur(2px)";
  addBookForm.className = "new-add-book";
  e.stopPropagation(); // important this prevents event goes inside the form as child Element

  if (addBookForm) {
    body.addEventListener("click", () => {
      addBookForm.className = "add-book";
      header.style.filter = "blur(0)";
      footer.style.filter = "blur(0)";
      openFormButton.style.filter = "blur(0)";
      gridContainer.style.filter = "blur(0)";
      addBookForm.reset(); //empty the form
    })
  }

  addButton.addEventListener("click", () => {
    addBookForm.className = "add-book";
    header.style.filter = "blur(0)";
    footer.style.filter = "blur(0)";
    openFormButton.style.filter = "blur(0)";
    gridContainer.style.filter = "blur(0)";
    addBookForm.reset(); //empty the form
  })
});

const addButton = document.querySelector(".add-button");
const name = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
if (addButton) {
  addButton.addEventListener("click", (e) => { //prevents from empty submit
    if (name.value === '' || name.value === null || author.value === '' || author.value === null || pages.value === '' || pages.value === null) {
      e.preventDefault();
    } else {
      addBookToLibrary();
    }
  })
}

function addBookToLibrary() {
  const newBook = new Book(name.value, author.value, Number(pages.value));
  myLibrary.push(newBook);
  console.log(myLibrary)
  createBookCard();
}

function createBookCard() {
  card.innerHTML = ""; // for multiple card for each object in an array i have to empty first the card
  myLibrary.forEach((item, i) => {

    let list = document.createElement("ul");
    let listName = document.createElement("li");
    let listAuthor = document.createElement("li");
    let listPages = document.createElement("li");
    let deleteImg = document.createElement("img");

    deleteImg.src = "images/delete-24.ico"
    deleteImg.className = "img";

    const toggleDiv = document.createElement("div");
    toggleDiv.className = "toggle-div"
    const toggleLabel = document.createElement("label");
    toggleLabel.className = "switch";
    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    console.log(item.read)

    toggleInput.checked = false;
    const toggleSpan = document.createElement("span");
    toggleSpan.className = "slider round";
    const togglePara = document.createElement("p");
    togglePara.innerHTML = "Mark as read"
    if (item.read === "not yet") {
      toggleInput.checked = false;
    }
    if (item.read === "yes") {
      toggleInput.checked = true;
      list.style = "background:white; border:solid 2px #fff; outline: solid 2px #3F4E4F";
      listName.style = "font-weight: bold; color:#2C3333";
      listAuthor.style = "font-weight: bold; color:#2C3333";
      listPages.style = "font-weight: bold; color:#2C3333";
      togglePara.style = "font-weight: bold; color:#2C3333";
    }

    list.className = "card";
    gridContainer.className = "grid-container";
    listName.innerHTML = `Book title: "${item.name}"`;
    listAuthor.innerHTML = `Author: ${item.author}`;
    listPages.innerHTML = `${item.pages} pages`;

    listPages.className = "listPages";

    toggleInput.addEventListener("click", (e) => {
      console.log("clicked")
      if (toggleInput.checked === true) {
        item.read = "yes";
        toggleInput.checked = true;
        console.log(toggleInput.checked)
        console.log(item);
        list.style = "background:white; border:solid 2px #fff; outline: solid 2px #3F4E4F";
        listName.style = "font-weight: bold; color:#2C3333";
        listAuthor.style = "font-weight: bold; color:#2C3333";
        listPages.style = "font-weight: bold; color:#2C3333";
        togglePara.style = "font-weight: bold; color:#2C3333";

      } else {
        item.read = "not yet";
        toggleInput.checked = false;
        console.log(item);
        list.style = "background:#3F4E4F";
        list.style = "color: white";
        listName.style = "color: white";
        listAuthor.style = "color: white";
        listPages.style = "color: white";
        togglePara.style = "color: white";
      }
    })

    list.appendChild(listName);
    list.appendChild(listAuthor);
    list.appendChild(listPages);
    toggleDiv.appendChild(togglePara);
    toggleDiv.appendChild(toggleLabel);
    toggleLabel.appendChild(toggleInput);
    toggleLabel.appendChild(toggleSpan);
    toggleDiv.appendChild(deleteImg);
    card.appendChild(list);
    list.appendChild(toggleDiv);
    gridContainer.appendChild(card);
    main.appendChild(gridContainer);

    if (toggleDiv.contains(deleteImg)) {
      deleteImg.addEventListener("click", (e) => {
        card.removeChild(list);
        delete myLibrary[i];
        e.stopPropagation();
      })
    }
  });
}

formDiv.addEventListener("click", (e) => {
  e.stopPropagation(e); // important this prevents event goes inside the form as child Element
})
