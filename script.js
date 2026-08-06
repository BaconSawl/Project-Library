addBookBtn = document.querySelector("#addBook")

const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.id = crypto.randomUUID();
}

function createBook() {
    const newBook = document.createElement("div")
}

function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
    /*
    const book1 = new Book("With Our Backs to the Wall: Victory and Defeat in 1918", "David Stevenson", "752", "Reading");
    const book2 = new Book("The Forgotten Soldier", "Guy Sajer", "560", "Reading");
    myLibrary.push(book1);
    myLibrary.push(book2);
    */
}

addBookBtn.addEventListener('click', () => {
    myLibrary.forEach((book) => {
        console.log(book);
    }
)
}) 

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "antiquewhite";
}



