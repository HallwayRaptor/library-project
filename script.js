const bookShelf = document.querySelector(".bookshelf");
const libraryCard = document.querySelector(".library-card");
const name = document.querySelector("#name");
const author = document.querySelector("#author");
const read = document.querySelector("#read");
const container = document.querySelector(".container");

const formButton = document.querySelector("form");

function addBookToLibrary() {
	let newBook = new Book(title.value, author.value, read.value);
	console.log(newBook);
	myLibrary.push(newBook);
}

function addBookToShelf(book) {
	let bookItem = document.createElement("div");
	bookItem.classList.add("form-area");
	bookItem.innerHTML = `
			<h3>${book.title}</h3>
			<p>${book.author}</p>
			<p>${book.read}</p>`
	container.appendChild(bookItem);
}

formButton.addEventListener("submit", function (e) {
	e.preventDefault();
	addBookToLibrary();
	addBookToShelf(myLibrary[myLibrary.length - 1]);
});

let myLibrary = [];

class Book {
	constructor(title, author, read) {
		this.title = title;
		this.author = author;
		this.read = read;
	}
}