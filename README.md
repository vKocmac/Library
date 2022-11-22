# Library

todo
grid template
turn of form if somewhere else clicked
{
  body.addEventListener("click",()=>{
    console.log("iam in")
    addBookForm.className = "add-book";
    header.style.filter = "blur(0)";
    footer.style.filter = "blur(0)";
    openFormButton.style.filter = "blur(0)";
    gridContainer.style.filter = "blur(0)";
    addBookForm.reset(); //empty the form
  })
}
if form is null display an alert
