var currentAudio = null; // Keep track of the current playing audio

function playSound(soundId) {
  // If there's any audio playing, pause it first
  if (currentAudio) {
    currentAudio.pause();
  }

  // Create a new Audio object and play it
  currentAudio = new Audio(`${soundId}.mp3`);
  currentAudio.play();
}

function pauseAudio() {
  if (currentAudio) {
    currentAudio.pause();
  }
}
