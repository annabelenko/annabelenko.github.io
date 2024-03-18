let img = new Image();
img.src = '/Users/annabelenko/Documents/GitHub/annabelenko.github.io/pixel_character_pale_red.png';
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function init() {
  const scale = 2;
  const width = 50;
  const height = 50;
  const scaledWidth = scale * width;
  const scaledHeight = scale * height;

  function drawFrame(frameIndex, canvasX, canvasY) {
    const frameX = frameIndex * width; // Calculate the x position of the frame on the sprite sheet
    ctx.drawImage(img, frameX, 240, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
  }

  const cycleLoop = [0, 1, 2]; // Define your frame sequence here
  let currentLoopIndex = 0;
  let frameCount = 0;
  let fps = 5; // Frames per second
  let fpsInterval = 1000 / fps;
  let then = Date.now();

  function step() {
    requestAnimationFrame(step);
    let now = Date.now();
    let elapsed = now - then;

    // Ensure we only update the frame at the desired fps
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      drawFrame(cycleLoop[currentLoopIndex], 0, 0); // Draw the current frame
      currentLoopIndex = (currentLoopIndex + 1) % cycleLoop.length; // Move to the next frame
    }
  }


}