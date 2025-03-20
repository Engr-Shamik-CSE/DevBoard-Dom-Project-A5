// Function to generate a random light color in hexadecimal format
function getRandomLightColor() {
    // Generate random values for red, green, and blue (between 180 and 255 to ensure light colors)
    const red = Math.floor(Math.random() * 76) + 180; // 180-255
    const green = Math.floor(Math.random() * 76) + 180; // 180-255
    const blue = Math.floor(Math.random() * 76) + 180; // 180-255
  
    
    const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return color;
  }
  
  
  function changeBodyColor() {
    const body = document.getElementById("body-container");
    if (body) {
      const randomColor = getRandomLightColor(); 
      body.style.backgroundColor = randomColor; 
    } else {
      console.error("Body container not found!");
    }
  }
  
  
  const randomColorButton = document.getElementById("btn-random-color-change");
  if (randomColorButton) {
    randomColorButton.addEventListener("click", changeBodyColor);
  } else {
    console.error("Random color button not found!");
  }