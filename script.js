const addBookBtn = document.querySelector("#addBook")

const myLibrary = [

];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.id = crypto.randomUUID();
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

/// TS is so ASS!!!! Need to fix TS NOW!
function addBookCard(book) {
    const { title, author, pages, readStatus, id} = book; /// Much better than write addBookCard(title, author, pages, readStatus)

    const container = document.querySelector(".container")

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = "#";

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
    strong_pages.textContent = pages;

    const strong_readStatus = document.createElement("strong");
    strong_readStatus.textContent = "Read Status: ";
    
    p_author.appendChild(strong_author);
    p_pages.appendChild(strong_pages);
    p_readStatus.appendChild(strong_readStatus)
    p_readStatus.appendChild(document.createTextNode(readStatus))
    
    card_content.append(h3, p_author, p_pages);
    card.append(img, card_content, p_readStatus);
    card.setAttribute("data-id", id);

    return container.appendChild(card);
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



