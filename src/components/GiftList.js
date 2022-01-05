import React from "react";

function GiftList(props) {
  return (
    <ul>
      {props.gifts.map((item) => (
        <li key={item.id}>
          {item.name}
          <button
            type="button"
            className="deleteButton"
            onClick={() => {
              props.onDelete(item.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GiftList;
