import { getBooks } from '../fetch-utils.js';
import { renderBooks } from '../render-utils.js';

const booksListEL = document.getElementById('books-list-container');


window.addEventListener('load', async() => {

    const books = await getBooks();

    for (let book of books) {
        const bookEl = renderBooks(book);

        booksListEL.append(bookEl);
    }

});