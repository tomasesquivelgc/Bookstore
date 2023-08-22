import React from 'react';
import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';

function Book({
  itemId, title, category, author, onRemove,
}) {
  const handleRemove = () => {
    onRemove(itemId);
  };

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>
          Category:
          {' '}
          {category}
        </p>
        <p>
          Author:
          {' '}
          {author}
        </p>
        <RemoveButton onClick={handleRemove} />
      </div>
    </li>
  );
}

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
