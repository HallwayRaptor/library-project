let myLibrary = [];

function addBookToLibrary() {}

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read}`;
	};
}

const testBook = new Book("test book", "test author", 399, "unread");

console.log(testBook.info());