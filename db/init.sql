CREATE DATABASE mybooks;
use mybooks;

CREATE TABLE mybook (
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(50),
  title VARCHAR(50),
  isbn INT,
  PRIMARY KEY (id)
);

