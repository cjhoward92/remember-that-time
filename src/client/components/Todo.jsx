import React, { PropTypes } from 'react';

const Todo = ({ onClick, onDeleteClick, completed, text, id }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <span>{text} <button className="btn btn-default" onClick={onDeleteClick}>Remove</button></span>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo