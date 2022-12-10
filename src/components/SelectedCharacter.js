import React from "react";
import List from "@mui/material/List";

export default function SelectedCharacter(props, item) {
  const handleClick = (event) => {
    //onclick - toggle class name that added transform class
    event.currentTarget.classList.toggle("test");

    //onclick - set a timer to remove the character from the screen
    const timer = setTimeout(() => {
      props.removeItem(item.id);
    }, 2100);
    //clear timer so it can be used again
    return () => clearTimeout(timer);
  };

  //creating a list of characters from the characters the user clicks on,
  //code for when the characters get displayed on screen when selected
  const characterList = props.characters.map((item, ind) => (
    <div
      className="selectedCharacter-containter"
      key={ind}
      onClick={handleClick}
    >
      {/* Character Name */}
      <div className="selectedCharacter-Name">{item.name}</div>

      {/* Character Image */}
      <img
        className="selectedCharacter-bodyShot"
        src={item.bodyShot}
        alt="Character Full Body Shot"
      />
      {/* Image to tell the user to click on the character */}
      <img src="assets/clickMe.png" className="clickme-icon" alt="click me" />
    </div>
  ));

  return (
    // Returning the above code styled onto the screen
    <div>
      <List>
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "250px" }}>
          {characterList}
        </div>
      </List>
    </div>
  );
}
