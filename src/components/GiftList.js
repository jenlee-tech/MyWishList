import React from "react";

function GiftList(props) {
  return (
    <ul>
      {props.gifts.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default GiftList;
