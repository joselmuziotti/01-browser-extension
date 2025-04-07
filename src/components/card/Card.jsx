import "./index.css";

const Card = ({name, logo, description, isActive, toggleActive, remove}) => {

    return (
      <section>
        <article>
          <img src={`${logo}`} alt={`${name}`} />
          <div>
            <span>{name}</span>
            <p>{description}</p>
          </div>
        </article>

        <div className="bottom-card">
          <button onClick={() => remove(name)}>Remove</button>
          <label className="switch">
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => toggleActive(name)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </section>
    );
  };

export default Card;
