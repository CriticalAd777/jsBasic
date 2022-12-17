export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.pages = +book.pages;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getBooksByPages(pagesFrom, pagesTo) {
        return this.books.filter(book => book.pages >= pagesFrom && book.pages < pagesTo);
    }
    getAuthorBooks(author){
        return this.books.filter(book => book.author == author);
    }

}