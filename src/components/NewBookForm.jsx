import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book object with the form input values
    const newBook = {
      title,
      author,
      category: 'Action',
      completionPercentage: '0',
      currentChapter: 'Not started',
      id: Date.now(), // Generate a unique ID (you can use a library for more robust IDs)
    };

    // Call the onAddBook function passed from the parent component
    onAddBook(newBook);

    // Clear the form inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Book</h3>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
