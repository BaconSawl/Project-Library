const addBookBtn = document.querySelector("#addBook")

const myLibrary = [
    {cover: "./assets/AtomicHabits.jpg" ,title: 'Atomic Habits', author: 'James Clear', pages: '256', readStatus: 'Done', id: '57144c01-741d-4fc7-a856-4432912c7ad2'},
    {cover: "./assets/1917.jpg" ,title: '1917', author: 'David Stevenson', pages: '430', readStatus: 'Done', id: '7a3f934d-8e34-441e-bd7a-7ac0431aa54e'},
    {cover: "./assets/ParadiseKiss.jpg" ,title: 'Paradise Kiss', author: 'Ai Yazawa', pages: '858', readStatus: 'Done', id: 'cc8f5e7c-f6e7-4d09-a7f8-01de6b0db76e'},

];

function Book(cover = "./assets/placeholderCover.jpg", title, author, pages, readStatus) {
    this.cover = cover;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.id = crypto.randomUUID();
}


function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus); /// Form will be used for this laterrr
    myLibrary.push(book);
    /*
    const book1 = new Book("With Our Backs to the Wall: Victory and Defeat in 1918", "David Stevenson", "752", "Reading");
    const book2 = new Book("The Forgotten Soldier", "Guy Sajer", "560", "Reading");
    myLibrary.push(book1);
    myLibrary.push(book2);
    */
}

/// TS is so ASS!!!! Need to fix TS NOW!
function addBookCard(book) {
    const { cover, title, author, pages, readStatus, id} = book; /// Much better than write addBookCard(title, author, pages, readStatus)
    // Noteforself: Deconstructing is happening in the function below "myLibrary.forEach((book)"

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = cover;

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
    
    card_content.append(h3, p_author, p_pages);
    card.append(img, card_content, p_readStatus);
    card.setAttribute("data-id", id);

    return card;
}

function displayBooks() {
    const container = document.querySelector(".container")

    myLibrary.forEach((book) => {
        container.append(addBookCard(book));
    })
}


addBookBtn.addEventListener('click', () => {
    myLibrary.forEach((book) => {
        console.log(book);
    }
)
})





function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "antiquewhite";
}


displayBooks()


