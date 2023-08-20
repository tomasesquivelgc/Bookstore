import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books, onDelete }) {
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id} // Assuming each book has a unique id
          title={book.title}
          category={book.category}
          author={book.author}
          completionPercentage={book.completionPercentage}
          currentChapter={book.currentChapter}
          onDelete={() => onDelete(book.id)} // Assuming onDelete receives the book id
        />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      completionPercentage: PropTypes.number.isRequired,
      currentChapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
