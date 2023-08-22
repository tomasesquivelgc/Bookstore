import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { selectBooks, removeBook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.itemId}
          itemId={book.itemId}
          title={book.title}
          author={book.author}
          category={book.category}
          onRemove={handleRemoveBook}
        />
      ))}
    </ul>
  );
}

export default BookList;
