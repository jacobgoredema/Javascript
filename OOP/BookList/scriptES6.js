// -- BOOK Class -- //
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

// -- UI Class -- //
class UI {
    addBookList(book) {
        console.log(book);
        const list = document.getElementById('book-list');

        // Create tr elements
        const row = document.createElement('tr');
        // insert columns
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);

    }

    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        div.className = `alert ${className}`;

        // add text
        div.appendChild(document.createTextNode(message));
        // get parent element
        const container = document.querySelector('.container');
        // get form element
        const form = document.querySelector('#book-form');
        // insert alert
        container.insertBefore(div, form);

        // set timemout after 3sec
        setTimeout(function () {
            document.querySelector('.alert').remove();

        }, 3000);

    }

    deleteBook(target) {
        if (target.className === 'delete')
            target.parentElement.parentElement.remove();

    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }

}

// -- Local Storage -- //
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));

        }

        return books;

    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function (book) {
            const ui = new UI;

            // add book to UI
            ui.addBookList(book);

        });
    }

    static addBooks(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }

        });

        localStorage.setItem('books', JSON.stringify(books));

    }

}

// -- DOM Load Event -- //
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// -- EVENT LISTENERS FOR ADD BOOK -- //
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Instantiating a book
    const book = new Book(title, author, isbn)

    // Instantiating UI
    const ui = new UI();

    console.log(ui);

    // Validation
    if (title === '' || author === '' || isbn === '') {
        // Error alert message
        ui.showAlert('Please fill in all field', "error");

    } else {
        // Add book to list
        ui.addBookList(book);

        // Add to Local Storage
        Store.addBooks(book);

        // add success message
        ui.showAlert('Book Added Successfully', 'success');

        // clear fields
        ui.clearFields();

    }

    e.preventDefault();

});

// -- EVENT LISTENERS FOR DELETE -- //
document.getElementById('book-list').addEventListener('click', function (e) {
    // Instantiating UI
    const ui = new UI();

    // delete book
    ui.deleteBook(e.target);

    // remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    ui.showAlert('Book Deleted Successfully', 'success');

    e.preventDefault();

});