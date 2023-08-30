// AjoutBook.js
import React, { useState } from 'react';
import { useBooksContext } from './BooksContext';

function AjoutBook() {
  const { addBook } = useBooksContext();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleAddBook = () => {
    const newBook = { author, title, isbn };
    addBook(newBook);
    setAuthor('');
    setTitle('');
    setIsbn('');
  };

  return (
    <div  style={contenair}>
      <h2  style={titre}>Enter new book:</h2>
      <form>
        <div>
          <label>Auteur</label> <br />
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
          <label>Isbn</label>
          <input
          
          style={input}
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button  style={boutton} type="button" onClick={handleAddBook}>Ajouter Livre</button>
      </form>
    
    </div>
  );
}

export default AjoutBook;
const alert={
   marginTop:'40%',
   border:'1px solid green',
   padding: '15px',
   backgroundColor:'green',
   fontWeight:'2',
  
}
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
  border:'2px solid red',
  marginTop:'10px'
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