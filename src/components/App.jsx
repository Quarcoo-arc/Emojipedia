import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

// function createEmoji(emojipedia) {
//   return (
//     <Emoji
//       key={emojipedia.id}
//       emoji={emojipedia.emoji}
//       title={emojipedia.name}
//       content={emojipedia.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojipedia) => (
          <Emoji
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            title={emojipedia.name}
            content={emojipedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
