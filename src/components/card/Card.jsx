import "./index.css";
import data from "../../js/data.json";
import { useState } from "react";

const Card = () => {
  const [cards, setCards] = useState(data);

  const toggleActiveState = (name) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.name === name ? { ...card, isActive: !card.isActive } : card
      )
    );
  };

  return cards.map(({ name, description, logo, isActive }) => {
    return (
      <section key={name}>
        <article>
          <img src={`${logo}`} alt="" />
          <div>
            <span>{name}</span>
            <p>{description}</p>
          </div>
        </article>

        <div className="bottom-card">
          <button>Remove</button>
          <label className="switch">
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => toggleActiveState(name)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </section>
    );
  });
};

export default Card;
