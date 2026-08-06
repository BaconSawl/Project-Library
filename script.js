const myLibrary = [];

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

