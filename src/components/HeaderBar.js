import { useState } from "react";

function HeaderBar(showList, visibleGiftList) {
  const [style, setStyle] = useState("");
  //Changing the style of a button here:
  const changeButtonStyle = () => {
    console.log("just clicked the change style function");
    setStyle(style === "" ? "active" : "");
  };

  const [buttonText, setButtonText] = useState("Close");
  //this is to change the text on the button upon click
  const changeTextButton = () => {
    setButtonText(buttonText === "Close" ? "Add Gift" : "Close");
  };

  return (
    <div>
      <h1> My Wishlist </h1>
      <button
        className={`styleButton ${style}`}
        onClick={() => {
          changeButtonStyle();
          changeTextButton();
          showList({ visibleGiftList: !visibleGiftList });
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default HeaderBar;
