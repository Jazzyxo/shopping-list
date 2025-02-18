import React from 'react'

function Item({ind, items, handleDelete}) {
  return (
    <div>
    <li className="list-item">{items}</li>
    <button
      className="delete-btn"
      type="button"
      onClick={() => handleDelete(ind)}
    >
      X
    </button>
  </div>
  );
}

export default Item

    