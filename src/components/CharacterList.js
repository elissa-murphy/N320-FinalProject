import React, { useState, useEffect } from "react";
import CharacterInfo from "./CharacterInfo";
import List from "@mui/material/List";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import SelectedCharacter from "./SelectedCharacter";
import TrackInfo from "./TrackInfo";
import { CSSTransition } from "react-transition-group";

export default function CharacterList(props, id) {
  //get data
  const [characters, setcharacters] = useState([]);

  //set the selected character on screen to change based on user clicking select button
  const [selectedCharacter, setselectedCharacter] = useState([]);

  //using state to determine if modal is open or closed, false = closed at start
  const [showModal, setModelOpen] = useState(false);

  //update list when user selects or removes (by clicking selected character displayed on screen)
  const [charList, setcharList] = useState([]);

  //On component mount: fetch and load mario data from data.json
  useEffect(() => {
    fetch("data/data.json")
      .then((result) => result.json())
      .then((data) => {
        //Store data
        setcharacters(data);
      });
  }, []);

  //Create our inventory list
  const charactersList = characters.map((item, delay, ind) => (
    /* transition used to make the characters appear one at a time on screen load - happens very fast */
    <CSSTransition
      key={ind}
      appear={true}
      in={true}
      timeout={{ enter: 5 * 100 }}
      classNames="characters"
    >
      {/* importing from character info - which is the list of clickable character logos seen on screen load */}
      <CharacterInfo
        classNames="characters"
        key={item.id}
        item={item}
        addItem={addItem}
        displayInfo={displayInfo}
        style={{ transitionDelay: `${delay}ms` }}
      />
    </CSSTransition>
  ));

  //bringing in trackInfo component to get the list of tracks, making them into the a list in const mapList
  const mapList = characters.map((item) => <TrackInfo item={item} />);

  //Remove character from the screen after the user clicks on them
  function removeItem(itemInd) {
    //Create copy of character list
    const tempcharList = [...charList];

    //Remove from the copied list
    tempcharList.splice(itemInd, 1);

    //Set new list
    setcharList(tempcharList);
  }
  //add character to screen
  function addItem(itemId) {
    setcharList([...charList, characters[itemId]]);
  }
  //show character info & open modal
  function displayInfo(itemId) {
    //Select character to be displayed screen then put character info into a variable
    setselectedCharacter(characters[itemId]);

    //set modal open to true to display info
    setModelOpen(true);
  }

  return (
    <div>
      {/* Modal that shows selecter character info: logo, name, image, bio, track info */}
      <Modal
        id="Modal"
        open={showModal}
        onClose={() => {
          setModelOpen(false);
        }}
      >
        {/* Character information box: logo, name, image, bio, track info */}
        <div id="info">
          <div className="logo-and-name">
            <img
              className="modal-characterLogos"
              src={selectedCharacter.logo}
              alt="Logo"
            />
            <h3 className="modal-characterNames">{selectedCharacter.name}</h3>
          </div>
          <div className="modal-desc">
            <p>{selectedCharacter.desc}</p>
          </div>
          <div className="modal-bodyImg">
            <img
              className="modal-characterBodyShot"
              src={selectedCharacter.bodyShot}
              alt="Character Full Body Shot"
            />
          </div>
          <div className="modal-track-list">
            {/* Displaying the list made above with the TrackInfo Component */}
            <List>{mapList[0]}</List>
          </div>
        </div>
      </Modal>
      {/* Grid for Selected Character Area */}
      <Grid container>
        <Grid>
          {/* Displaying inital character list on screen load - this comes from the Character Info Component */}
          <div id="characterList">{charactersList}</div>
        </Grid>
        <Grid id="addedCharacterList">
          <h2 className="selectedCharacter-title">Selected Character</h2>
          {/* Displaying Selected Character - comes from Selected Character component */}
          <SelectedCharacter characters={charList} removeItem={removeItem} />
        </Grid>
      </Grid>
    </div>
  );
}
