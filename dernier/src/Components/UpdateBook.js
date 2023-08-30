import React, { useState, useEffect } from 'react';
import { useBooksContext } from './BooksContext';

function UpdateBook() {
  const { books, updateBook } = useBooksContext();
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');

  useEffect(() => {
    const selectedBook = books[selectedBookIndex] || {};
    setAuthor(selectedBook.author || '');
    setTitle(selectedBook.title || '');
    setIsbn(selectedBook.isbn || '');
  }, [selectedBookIndex, books]);

  const handleUpdateBook = () => {
    updateBook(books[selectedBookIndex].id, {
      author,
      title,
      isbn
    });
  };

  return (
    <div style={contenair}>
      <p style={titre}>Update book:</p>
      <div style={{marginTop:'-0.5em'}}>
      <label>Row Index to Update</label>
        <input
        style={input}
          type="number"
          value={selectedBookIndex}
          onChange={(e) => setSelectedBookIndex(Number(e.target.value))}
          min="0"
          max={books.length - 1}
        />
      </div>
      <form>
        <div>
          <label>Author</label> <br />
          <input
            style={input}
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Title</label> <br />
          <input
            style={input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Isbn</label> <br />
          <input
            style={input}
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button 
        style={boutton}
        type="button" onClick={handleUpdateBook}>Update</button>
      </form>
    </div>
  );
}

export default UpdateBook;
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
  padding:'10px',
  color:'red',
  borderRadius:'5px',
  boxShadow:'1px 1px ',
  backgroundColor:'transparent',
  border:'2px solid red'
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