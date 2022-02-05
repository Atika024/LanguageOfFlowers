import React, { useState } from "react";
import "./App.css";

var flowers = {
  "🌸": "Cherry blossoms are a symbolic flower of the spring, a time of renewal, and the fleeting nature of life.",
  "🌹": "The red rose symbolizes romance, love, beauty, and courage. A red rosebud signifies beauty and purity. A thornless red rose means love at first sight. Yellow roses symbolize friendship and joy, and new beginnings. Orange roses symbolize fascination, desire, and sensuality. Pink roses indicate appreciation and gratitude, especially dark pink roses. Light pink roses are usually indicative of admiration and/or sympathy. The white rose stands for innocence and purity; also silence, secrecy, and reverence. White rosebuds are symbolic of girlhood. Brides often select white roses for their bridal bouquets.",
  "🌺": "Yellow hibiscus is often associated with happiness, sunshine, and good luck! Red hibiscus is a symbol of love and passion. Pink hibiscus stands for friendship and all different kinds of love – not just romantic! Purple hibiscus is associated with mystery, knowledge, and the upper class.",
  "🌻": "Quite literally named after the sun, sunflowers evoke positivity and warmth and are a symbol of respect and radiance in hanakotoba. It has been said that the sunflower turning to follow the sun symbolises great faith and loyalty. In China, sunflowers symbolise longevity- perhaps connected to the long life of the sun. As such, they are often gifted at the opening of a new business or chapter in one’s life as a wish of longevity and prosperity in your endeavour.",
  "🌼": "Daisy flower symbolizes new beginnings, hope, innocence, fun, affection, Fertility, Motherhood, Fidelity and Stardust.",
  "🌷": "The deep colour of the tulip reflects the intensity of its meaning; a perfect and deep love as well as wealth, status and indulgence. Variations in the tulip’s colour also create variations in its meaning, which tracks with that of the rose. Red for love, yellow for jealousy and white for purity.",
  "🍀": "Clover is a symbol of Good Luck, Prosperity and Inner Strength"
};

var flowersKeys = Object.keys(flowers);

function App() {
  const [userInputMeaning, flowerMeaning] = useState("");

  function flowerInput(e) {
    var Input = e.target.value;
    var meaning = flowers[Input];
    if (meaning === undefined) {
      meaning = "The flower not found in our Bouquet";
    }

    flowerMeaning(meaning);
  }

  function flowerClickHandler(flower) {
    var meaning = flowers[flower];
    flowerMeaning(meaning);
  }

  return (
    <div className="App">
      <body>
        <h1>The Languge of Flowers</h1>

        <input onChange={flowerInput} />
        <h3>{userInputMeaning}</h3>
        <h3>What the flower symbolizes</h3>

        {flowersKeys.map(function (keys) {
          return (
            <button
              class="button-30"
              onClick={() => flowerClickHandler(keys)}
            >
              {keys}
            </button>
          );
        })}
      </body>
    </div>
  );
}

export default App;