const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'green';

var rectWidth = 300;
var rectHeight = 100;
var xPos = (canvas.width - rectWidth) / 2; 
var yPos = canvas.height - rectHeight; 

ctx.fillRect(xPos,yPos,rectWidth,rectHeight); // add the grass

// Use a for loop to draw each blade of grass
for(var i = 0; i < canvas.width; i += 5) {
    // Draw a blade of grass as a rectangle
    ctx.fillRect(i, canvas.height - 110, 2, 20); 
}

// Set the font for caption
ctx.font = '14px Arial';

// Choose color of caption
ctx.fillStyle = '#FF009D';

// Add the caption text
ctx.fillText('Hey Peppa Pig', 100, 30);

// Sun
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2, false); // Sun circle at center with radius 50
ctx.fillStyle = 'yellow';
ctx.fill();

// Draw sun rays
for (let i = 0; i < 360; i += 20) { // Adjust the angle for more or fewer rays
    ctx.beginPath();
    ctx.moveTo(150 + 50 * Math.cos(i * Math.PI / 180), 150 + 50 * Math.sin(i * Math.PI / 180)); // Start at the edge of the sun
    ctx.lineTo(150 + 70 * Math.cos(i * Math.PI / 180), 150 + 70 * Math.sin(i * Math.PI / 180)); // End point of the ray outside the sun
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
}

// House body
ctx.fillStyle = 'blue';
ctx.fillRect(50, 170, 30, 30); // Small square for the house body

// Left window
ctx.fillStyle = 'lightgray'; // Window color
ctx.fillRect(55, 175, 8, 10); 

// Right window
ctx.fillRect(68, 175, 8, 10); 

// Door
ctx.fillStyle = 'brown';
ctx.fillRect(60, 190, 8, 10);

// House roof
ctx.beginPath();
ctx.moveTo(45, 175); 
ctx.lineTo(65, 120); // Peak of the roof
ctx.lineTo(85, 175);
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();

// UFO base
ctx.beginPath();
ctx.arc(250, 50, 40, 0, Math.PI, true); 
ctx.fillStyle = 'silver';
ctx.fill();

// UFO dome
ctx.beginPath();
ctx.arc(250, 50, 20, Math.PI, 2 * Math.PI, true);
ctx.fillStyle = 'lightgray';
ctx.fill();

// Lights
const colors = ['red', 'green', 'blue', 'yellow'];
for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(220 + i*20, 50, 5, 0, 2 * Math.PI);
    ctx.fillStyle = colors[i];
    ctx.fill();

    // Draw light rays
    ctx.beginPath();
    ctx.moveTo(220 + i*20, 55); // Start just below the light
    ctx.lineTo(220 + i*20, 200); // End point of the ray
    ctx.strokeStyle = colors[i];
    ctx.globalAlpha = 0.2; // Adjust for lighter shade
    ctx.stroke();
    ctx.globalAlpha = 1; // Reset opacity
}

// Body + Dress
ctx.beginPath();
ctx.fillStyle = '#ffcccc'; // Light pink
ctx.ellipse(150, 180, 30, 60, Math.PI / 1, 0, 2 * Math.PI);
ctx.fill();


// Head
ctx.beginPath();
ctx.ellipse(170, 100, 35, 35, Math.PI / 4, 0, 2 * Math.PI); 
ctx.ellipse(190, 97, 25, 35, Math.PI / 4, 0, 2 * Math.PI); 

ctx.fill();

// Nose
ctx.beginPath();
ctx.fillStyle = '#F49AD1'; // Light pink
ctx.ellipse(210, 85, 10, 20, Math.PI / -8, 0, 2 * Math.PI); 
ctx.fill();

// Eye
ctx.beginPath();
ctx.fillStyle = 'white'; // Eye color
ctx.arc(178, 90, 7, 0, Math.PI * 2, true); 
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black'; // Pupil color
ctx.arc(180, 88, 3, 0, Math.PI * 2, true); 
ctx.fill();

// Smile
ctx.beginPath();
ctx.strokeStyle = 'black'; // Smile color
ctx.arc(185, 120, 8, 0, Math.PI, false); 
ctx.stroke();

// Legs
ctx.fillStyle = '#ffcccc'; 
ctx.fillRect(125, 210, 10, 50); 
ctx.fillRect(150, 210, 10, 50); 

// Arms
ctx.beginPath();
ctx.lineWidth = 7; 
ctx.strokeStyle = '#ffcccc'; // Arms color
ctx.moveTo(130, 180);
ctx.lineTo(110, 220);  
ctx.moveTo(170, 180);
ctx.lineTo(190, 220);  
ctx.stroke();
