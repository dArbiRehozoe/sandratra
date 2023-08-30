// ListBook.js
import React, { useState } from 'react';
import { useBooksContext } from './BooksContext';


function ListBook() {
  const { books } = useBooksContext();
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
        <h2>Book list</h2>
        <p>Avalaible books:</p>
        <table style={table}>
        <tr>
            <th style={th}></th>
            <th style={th}>author</th>
            <th style={th}>id</th>
            <th style={th}>isbn</th>
            <th style={th}>title</th>
        </tr>
        {books.map((book, index) => ( <tr>
            <td style={th}> {index}</td>
            <td style={ligne}>{book.author}</td>
            <td style={ligne}>{book.id}</td>
            <td style={ligne}> {book.isbn}</td>
            <td style={ligne}>{book.title} </td>
        </tr>))}
      
      </table>
    </div>
  );
}

export default ListBook;
const ligne ={
  border: "1px solid gray",
  fontWeight: '500'
}
const th ={
  border: "1px solid gray",
  fontWeight: '6',
  textAlign: 'left'
}
const table={
  borderCollapse: 'collapse',
  border: "1px solid gray",
  width: '100%',
  borderRadius:'24px',
}