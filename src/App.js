import "./App.css";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="App">
      {/* Header = Instructions for user to use the app */}
      <header>
        <h2>MARIO CHARACTERS</h2>
        <p>Elissa Murphy | N320 Final Project | Fall 2022</p>
        <p>
          Learn about each Mario Kart character by clicking on each character's
          icon. You can select a character to display them on the screen. Click
          on the character for a fun animation then move onto the next!
        </p>
      </header>
      <CharacterList />
    </div>
  );
}

export default App;
