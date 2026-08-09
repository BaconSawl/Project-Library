const addBookBtn = document.querySelector("#addBook")

const myLibrary = [];

function Book(title, author, pages, readStatus, cover = "./assets/placeholderCover.jpg", ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.cover = cover;
    this.id = crypto.randomUUID();
}


function addBookToLibrary(title, author, pages, readStatus, cover) {
    const book = new Book(title, author, pages, readStatus, cover); /// Form will be used for this laterrr
    myLibrary.push(book);
}

function getDataFromForm() {
    const bookTitle = document.querySelector('#title').value;
    const bookAuthor = document.querySelector('#author').value;
    const bookPages = document.querySelector('#pages').value;
    let readStatus = document.querySelector('#readStatus').checked;
    if (readStatus) {
        readStatus = 'Done';
    } else {
        readStatus = 'Ongoing';
    }

    addBookToLibrary(bookTitle, bookAuthor, bookPages, readStatus);
    displayBooks();
}

const form = document.querySelector('.form-container')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    getDataFromForm();
    closeNav();
    console.log(myLibrary)
})



/// TS is so ASS!!!! Need to fix TS NOW!
function addBookCard(book) {
    const { cover, title, author, pages, readStatus, id} = book; /// Much better than write addBookCard(title, author, pages, readStatus)
    // Noteforself: Deconstructing is happening in the function below "myLibrary.forEach((book)"
    // Note for above: Wjhat the fuck i talking about ????

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "imgCover";
    img.src = cover;

    // Why the fuck I write these here for
    const removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    const removeIcon = document.createElement("img");
    removeIcon.src = "./assets/delete.png";
    removeIcon.width = 25;
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.findIndex(e => e.id === id), 1); // Its "id" , not "data-id" or "book.id" you iditot
        console.log("DIE");
        displayBooks();
    })

    removeBtn.appendChild(removeIcon);

    const card_content = document.createElement("div");
    card_content.className = "card-content";

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p_author = document.createElement("p");
    const p_pages = document.createElement("p");
    const p_readStatus = document.createElement("p");

    const strong_author = document.createElement("strong");
    strong_author.textContent = author;

    const strong_pages = document.createElement("strong");
    strong_pages.textContent = pages + " pages";

    const strong_readStatus = document.createElement("strong");
    strong_readStatus.textContent = "Read Status: ";
    
    p_author.appendChild(strong_author);
    p_pages.appendChild(strong_pages);
    p_readStatus.appendChild(strong_readStatus)
    p_readStatus.appendChild(document.createTextNode(readStatus))
    
    card_content.append(removeBtn, h3, p_author, p_pages);
    card.append(img, card_content, p_readStatus);

    // card.setAttribute("data-id", id); // Giving each book a unique data attribute
    // This line is basically useless why did I even set its astrribute for

    return card;
}

function displayBooks() {
    const container = document.querySelector(".container")
    container.replaceChildren(); // Better to use than innerHTML
    container.appendChild(addBookBtn);
    myLibrary.forEach((book) => {
        container.insertBefore(addBookCard(book), addBookBtn); // This will make sure that the book cards are inserted BEFORE the "add book" card
    })
}


addBookBtn.addEventListener('click', () => {
    openNav();
})


// Sidebar stuff
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "antiquewhite";
}

// Terrible way to add new books, but fuck that, fix later
addBookToLibrary('Atomic Habits', 'James Clear', '256', 'Done', './assets/AtomicHabits.jpg');
addBookToLibrary('1917', 'David Stevenson', '430', 'Done', './assets/1917.jpg');
addBookToLibrary('Paradise Kiss', 'Ai Yazawa', '858', 'Done', './assets/ParadiseKiss.jpg');

displayBooks()


