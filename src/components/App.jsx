import React from "react";
import emojipedia from "../emojiepedia";
import Emojie from "./emojie";

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }


function CreateEmojie(emojiTerm) {
  return (
   
    <Emojie 
      key={emojiTerm.id} 
      emoji={emojiTerm.emoji} 
      name={emojiTerm.name} 
      meaning={emojiTerm.meaning} 
      />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEmojie)}</dl>
    </div>
  );
}

export default App;
