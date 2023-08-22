import React from 'react';
import PropTypes from 'prop-types';

function RemoveButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Delete
    </button>
  );
}

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
