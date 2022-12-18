import React, { useState } from "react";
import { GiLightBulb } from "react-icons/gi";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // function to toggle darkmode
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.setItem("theme", "light-mode");
    }
  };

  let getTheme = (): string => {
    let theme = localStorage.getItem("theme");
    return theme as string;
  };

  return (
    <main className={getTheme()}>
      <button onClick={toggleDarkMode}>
        <GiLightBulb className={!darkMode ? "dark-mode-button" : ""} />
      </button>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae quidem voluptatem quibusdam
          doloremqu.
        </p>
      </div>
    </main>
  );
};

export default App;
