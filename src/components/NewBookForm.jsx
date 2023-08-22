import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import AddButton from './AddButton';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    const book = {
      itemId: uuidv4(),
      title,
      author,
      category: 'Action',
    };

    dispatch(addBook(book));

    // Clear the form inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleAddBook}>
      <h3>Add a New Book</h3>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <AddButton onClick={handleAddBook} />
    </form>
  );
}

export default BookForm;
