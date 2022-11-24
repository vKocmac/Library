let myLibrary = [];
const body = document.querySelector("body");
const main = document.querySelector("main");
let gridContainer = document.createElement("div");
let card = document.createElement("div");
let formDiv = document.querySelector(".form-div");


function Book(name, author, pages,read = "not yet") {
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
  addButton.addEventListener("click", (e) => { //prevent from empty submit
    if (name.value === '' || name.value === null || author.value === '' || author.value === null || pages.value === '' || pages.value === null ) {
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

    let toggleDiv = document.createElement("div");
    toggleDiv.className = "toggle-div"
    let toggleLabel = document.createElement("label");
    toggleLabel.className = "switch";
    let toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    let toggleSpan = document.createElement("span");
    toggleSpan.className = "slider round";
    let togglePara = document.createElement("p");
    togglePara.innerHTML = "Mark as read"


    list.className = "card";
    gridContainer.className = "grid-container";
    listName.innerHTML = `Book title: "${item.name}"`;
    listAuthor.innerHTML = `Author: ${item.author}`;
    listPages.innerHTML = `${item.pages} pages`;


    toggleInput.addEventListener("click", (e)=>{

      if(toggleInput.checked === true){
        item.read = "yes";
        console.log(item);
        list.style = "background:white";
        listName.style = "color: black";
        listAuthor.style = "color: black";
        listPages.style = "color: black";
        togglePara.style = "color: black";

      }else{
        item.read = "not yet";
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
    listPages.className = "listPages";


    card.appendChild(list);
    list.appendChild(toggleDiv);

    gridContainer.appendChild(card);
    main.appendChild(gridContainer);


    if(toggleDiv.contains(deleteImg)){

      deleteImg.addEventListener("click",(e)=>{
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
