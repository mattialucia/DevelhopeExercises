import React from "react";

const MouseClicker = () => {
  const handleButtonClick = (event) => {
    // Print the name attribute to the console
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    // Prevent the button's name from being logged
    event.stopPropagation();
    // Print the src of the image to the console
    console.log(event.target.src);
  };

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Button One
      </button>

      <button name="two" onClick={handleButtonClick}>
        <img
          src="Esercizi Develhope\React\1_esercizio\Applicazione React\src\img\info.png"
          alt="Example"
          onClick={handleImageClick}
        />
      </button>
    </div>
  );
};

export default MouseClicker;
