import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title, category, author, completionPercentage, currentChapter, onDelete,
}) {
  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>
          Category:
          {category}
        </p>
        <p>
          Author:
          {author}
        </p>
        <p>
          Completion:
          {completionPercentage}
          %
        </p>
        <p>
          Current Chapter:
          {currentChapter}
        </p>
        <button type="button" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completionPercentage: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
