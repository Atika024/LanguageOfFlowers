import React, { useState } from "react";
import "./styles.css";
// import Button from 'react-bootstrap/Button'
import Button from "@mui/material/Button";

var flowers = {
  "Alstroemeria": "Wealth, Prosperity and Fortune",
  "Amaryllis": "splendid beauty",
  "Anemone": "On a darker note indicates fading hope and a feeling of having been forsaken. On a positive note it symbolizes anticipation",
  "Anthurium": "Hospitality, Happiness and Abundance",
  "Aster": "Patience, Love of Variety, Elegance and Daintiness",
  "Bird of Paradise": "Joyfulness, Magnificence, Exciting and Wonderful anticipation",
  "Calla Lily": "Magnificence and Beauty; White Calla lilies combine these two attributes with purity and innocence associated with the color white to make it the perfect choice of flower in a Wedding bouquet.",
  "Carnation": "Pride and Beauty; A red carnation symbolizes love, pride and admiration; a pink carnation symbolizes the love of a woman or a mother; a purple carnation symbolizes capriciousness; a yellow carnation symbolizes disdain, rejection or disappointment; while a white carnation symbolizes innocence and pure love. A striped carnation conveys refusal.",
  "Chrysanthemum": "Fidelity, Optimism, Joy and Long Life; A red chrysanthemum conveys love; a white chrysanthemum symbolizes truth and loyal love while a yellow chrysanthemum symbolizes slighted love.",
  "Daffodil": "Regard and Chivalry; It is indicative of rebirth, new beginnings and eternal life. It also symbolizes unrequited love. A single daffodil foretells a misfortune while a bunch of daffodils indicate joy and happiness.",
  "Daisy": "Innocence and Purity; It conveys loyal love and “I will never tell”. Gerbera Daisy specifically conveys cheerfulness.",
  "Freesia": "Inocence and Thoughtfulness",
  "Gardenia": "Purity and Sweetness; They indicate secret love. They convey joy. They tell the receiver you are lovely",
  "Gerbera": "Cheerfulness",
  "Gladiolus": "Strength of Character, Faithfulness and Honor; The Gladiolus flower signifies remembrance.",
  "Heather": "Admiration, Solitude and Beauty; White Heather symbolizes protection and indicates that wishes will come true.",
  "Hyacinth": "Blue hyacinth stands for constancy, purple for sorrow, red or pink for play, white for loveliness and yellow for jealousy.",
  "Hydrangea": "Heartfelt Emotions; It can be used to express gratitude for being understood. In its negative sense hydrangea symbolizes frigidity and heartlessness.",
  "Iris": "Eloquence; Purple iris is symbolic of wisdom and compliments. Blue iris symbolizes faith and hope. Yellow iris symbolizes passion while white iris symbolizes purity.",
  "Lilac": "White lilac symbolizes humility and innocence, field lilac symbolizes charity while purple lilac symbolizes first love.",
  "Lily": "Purity and Refined Beauty; White lily symbolizes modesty and virginity, orange lily symbolizes passion, yellow lily symbolizes gaiety while Lily of the Valley symbolizes sweetness and purity of heart. The Easter lily is the symbol of the Virgin Mary.",
  "Orchid": "The Exotic Beauty; It symbolizes refinement, thoughtfulness and mature charm. It also symbolizes proud and glorious femininity.",
  "Peony": "Bashfulness and Compassion; It can also be used to express indignation or shame. It symbolizes a happy life, happy marriage, good health and prosperity.",
  "Red Rose": "Love, Deep Emotions; A deep red rose can be used to convey heartfelt regret and sorrow",
  "White Rose": "Purity, Chastity and Innocence White",
  "Yellow Rose": "Symbol of Friendship and Caring",
  "Pink Rose": "Light pink rose blooms are indicative of sweetness and innocence. Deep pink rose blooms convey deep gratitude and appreciation. Pink roses also connote elegance and grace.",
  "Snapdragon": "Graciousness and Strength; Its negative connotations include deception and presumption.",
  "Sunflower": "Pure Thoughts. It symbolizes adoration and dedication. It is symbolic of dedicated love. It is however also symbolic of haughtiness.",
  "Sweet Pea": "Delicate Pleasure and Bliss. It is a flower symbolic of departure after having a good time.",
  "Tulip": "Declaration of Love. It also symbolizes fame and perfect love."
};

var flowersKeys = Object.keys(flowers);

function App() {
  const [userInputMeaning, flowerMeaning] = useState("");

  function flowerInput(e) {
    var Input = e.target.value;
    var meaning = flowers[Input];
    if (meaning == undefined) {
      meaning = "Not found in our database";
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
        <h3>What we know</h3>

        {flowersKeys.map(function (keys) {
          return (
            <button
              class="button-30"
              role="button"
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