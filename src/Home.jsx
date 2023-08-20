import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/NewBookForm';

function Home() {
  const [books, setBooks] = React.useState([
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completionPercentage: '64',
      id: 1,
      currentChapter: 'chapter 17',
    },
    {
      title: 'Dune',
      author: 'Franj Herbert',
      category: 'Science fiction',
      completionPercentage: '8',
      id: 2,
      currentChapter: 'chapter 3: "A Lesson Learned"',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      completionPercentage: '0',
      id: 3,
      currentChapter: 'Introduction',
    },
  ]);

  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <h2>My book list</h2>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default Home;
