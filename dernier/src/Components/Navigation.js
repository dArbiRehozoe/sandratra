import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBook } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiAddFill } from 'react-icons/ri';
import { LuLibrary } from 'react-icons/lu';

function NavBar() {
  const [activeLink, setActiveLink] = useState('books');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div style={{width:"90%",
    margin:'auto',backgroundColor:"black",
    color:'white',marginTop:'25%'
    }}>
      <ul style={ulStyle}>
      <h2 style={{fontWeight:'7',paddingLeft:'15px',paddingTop:'5px',display:'flex'}}> <LuLibrary style={icone}/> LIBRARY</h2>
      <hr style={{ marginTop: '-15px'}}/>
        <li style={activeLink === 'books' ? activeLiStyle : liStyle}>
          <Link
            style={linkStyle}
            to='/'
            onClick={() => handleLinkClick('books')}
          >
          <BsBook style={icone}/>
            Books
          </Link>
        </li>
        <li style={activeLink === 'update' ? activeLiStyle : liStyle}>
          <Link
            style={linkStyle}
            to='/updatebook'
            onClick={() => handleLinkClick('update')}
          >
             <BsPencil style={icone}/>
            Update
          </Link>
        </li>
        <li style={activeLink === 'delete' ? activeLiStyle : liStyle}>
          <Link
            style={linkStyle}
            to='/deleteBook'
            onClick={() => handleLinkClick('delete')}
          >
          <RiDeleteBin6Line style={icone}/>
            Delete
          </Link>
        </li>
        <li style={activeLink === 'add' ? activeLiStyle : liStyle}>
          <Link
            style={linkStyle}
            to='/addbook'
            onClick={() => handleLinkClick('add')}
          >
            <RiAddFill style={icone}/>
            Add
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding:15,
  paddingTop: '0em',
  backgroundColor: 'black',

};

const liStyle = {
  display: 'block',
  color: 'white',
  padding: '1px 2px',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  display:'flex',
  borderRadius:'5px'
};

const activeLiStyle = {
  ...liStyle,
  backgroundColor: '#FF0000', // Rouge
  color: 'white',
};

const linkStyle = {

  display: 'flex',
  color: 'white',
  padding: '8px 16px',
  textDecoration: 'none',
 
  width:'100%'
};
const h1Style = {
  display: 'block',
  color: 'white',
  padding: '8px 16px',
  textDecoration: 'none',
};
const icone={
  paddingTop:'4px',
  paddingRight:'4px',
 
}