// App.js
import React from 'react';
import { BooksProvider } from './Components/BooksContext';
import AjoutBook from './Components/AddBook';
import ListBook from './Components/Books';
import DeleteBook from './Components/DeleteBook';
import UpdateBook from './Components/UpdateBook';
import NavBar from './Components/Navigation';
import { BsXLg } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BrowserRouter, Routes} from 'react-router-dom';
import {Route} from "react-router-dom";
import { useState } from 'react';
function App() {
  const [cache,setCache]=useState(false);
  return (
      <div className="App">
          <BrowserRouter>
            <BooksProvider>
              <GiHamburgerMenu style={{
                color:'white',position:'fixed',
                top:0,margin:'2%',
                }}
                onClick={() => setCache(true)}
                />
              <div className='nav' style={cache ? activeNav : deactivateNav}>
                <BsXLg style={{color:"white",float:"right",margin:'15px'}} 
               onClick={() => setCache(false)}
                />
                <NavBar/>
                <Routes>
                  <Route path="/" >
                    <Route index element={<div></div>}/>
                    <Route path="/addbook" element={  <AjoutBook />} />
                    <Route path="/updatebook" element={  <UpdateBook />} />
                    <Route path="/deleteBook" element={  <DeleteBook />  } />
                  </Route>
                </Routes>
              </div>
              <div className='main'> <ListBook/></div>
            </BooksProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
const activeNav={
  display:'initial'
}
const deactivateNav={
  display:'none'
}