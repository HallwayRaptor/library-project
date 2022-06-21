let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read}`;
	};
}

const title = prompt("Book Title");
const author = prompt("Author");
const pages = prompt("Pages");
const read = prompt("is it read?");

const book1 = new Book(title, author, pages, read);

console.log(book.info());

function addBookToLibrary() {}
