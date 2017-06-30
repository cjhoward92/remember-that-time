import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, onDeleteClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    <span>{text} <button className="btn btn-default" onClick={onDeleteClick}>Remove</button></span>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
