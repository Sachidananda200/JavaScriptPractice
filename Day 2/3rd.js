// Object to represent a book
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180
};

// Array to store a collection of books
let library = [];

// Function to add a book to the library
function addBook(title, author, pages) {
  let newBook = {
    title: title,
    author: author,
    pages: pages
  };
  library.push(newBook);
}

// Function to list all books in the library
function listBooks() {
  for (let i = 0; i < library.length; i++) {
    console.log("Title: " + library[i].title);
    console.log("Author: " + library[i].author);
    console.log("Pages: " + library[i].pages);
  }
}

// Add books to the library
addBook("The Hobbit", "J.R.R. Tolkien", 300);
addBook("To Kill a Mockingbird", "Harper Lee", 281);

// List all books in the library
listBooks();
