// DeleteBook.js
import React, { useState } from 'react';
import { useBooksContext } from './BooksContext';

function DeleteBook() {
  const { books, deleteBook } = useBooksContext();
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);

  const selectedBook = books[selectedBookIndex] || {};

  const handleDeleteBook = () => {
    deleteBook(selectedBook.id);
  };

  return (
    <div style={contenair}>
      <h2 style={titre}>Delete book:</h2>
      <div style={{marginTop:'1em'}}>
        <label>Enter row index to delete:</label> <br />
        <input
          type="number"
          style={input}
          value={selectedBookIndex}
          onChange={(e) => setSelectedBookIndex(Number(e.target.value))}
          min="0"
          max={books.length - 1}
        />
      </div>
      <div>
        <button  style={boutton} type="button" onClick={handleDeleteBook}>Delete</button>
      </div>
    </div>
  );
}

export default DeleteBook;
const input = {
  width:'96%',
  marginTop:'5px',
  marginBottom:'5px',
  backgroundColor:'black',
  color:'white',
  borderRadius:'5px',
  padding:'5px',
  border:'1px solid black'
};
const boutton={
  padding:'8px',
  color:'red',
  borderRadius:'5px',
  boxShadow:'1px 1px ',
  backgroundColor:'transparent',
  border:'2px solid red',
  marginTop:'5px'
}
const contenair={
  color:'white',
  fontSize:'13px',
  margin:'auto',
  width:'90%'
}
const titre={
  fontSize:'15px',
  fontWeight:'12'
}