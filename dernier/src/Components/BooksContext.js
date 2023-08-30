// BooksContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const BooksContext = createContext();

export function useBooksContext() {
  return useContext(BooksContext);
}

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
  
    }
  };

  const addBook = async (newBook) => {
    try {
    await axios.post('http://127.0.0.1:5000/books', newBook); 
      fetchBooks(); 
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const updateBook = async (bookId, updatedData) => {
    try {
      await axios.put(`http://127.0.0.1:5000/books/${bookId}`, updatedData); // Adapt to your API endpoint
      fetchBooks(); // Refetch the updated books after the update
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/books/${bookId}`); // Adapt to your API endpoint
      fetchBooks(); // Refetch the updated books after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  return (
    <BooksContext.Provider value={{ books, addBook, updateBook ,deleteBook}}>
      {children}
    </BooksContext.Provider>
  );
}
