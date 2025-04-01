import { useState, useEffect } from "react";
import "./index.css";

const Header = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header>
      <article>
        <img src={`/images/logo-${theme}.svg`} alt="Logo" />
        <button onClick={toggleTheme}>
          <img
            src={`/images/icon-${theme}.svg`}
            alt={`Logo ${theme === "light" ? "Sun" : "Moon"}`}
          />
        </button>
      </article>
    </header>
  );
};

export default Header;
