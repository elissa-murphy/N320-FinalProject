import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

//Export characters to the screen
export default function CharacterInfo(props) {
  //const with state used to determine if a button is disabled or not
  const [disable, setDisable] = useState(false);

  console.log(setDisable);
  return (
    //Add each character to the screen as a list item
    <ListItem>
      {/* Add a button to each character so the user can select it */}
      <Button
        className="Button"
        variant="contained"
        color="primary"
        //set state of set disable btn const to false
        disabled={disable}
        onClick={(e) => {
          props.addItem(props.item.id);
          //change state of set disable btn const to true
          setDisable(true);
        }}
      >
        Select
      </Button>

      {/* Character Logos to click on */}
      <img
        src={props.item.logo}
        alt="Logo"
        className="logos"
        onClick={() => {
          //on click, pull up modal
          props.displayInfo(props.item.id);
        }}
      />
    </ListItem>
  );
}
