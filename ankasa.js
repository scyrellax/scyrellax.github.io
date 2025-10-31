window.addEventListener("load", () => {
  const audio = document.getElementById("tune");
  const playIcon = document.querySelector(".playy");
  const pauseIcon = document.querySelector(".pausee");

  // delay for loading
  setTimeout(() => {
    audio.muted = true;
    audio.play().then(() => {
      // force pause icon
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
    }).catch(() => {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    });
  }, 300);
});

function songstart() {
  const audio = document.getElementById("tune");
  const playIcon = document.querySelector(".playy");
  const pauseIcon = document.querySelector(".pausee");

  if (audio.paused || audio.currentTime === 0 || audio.ended) {
    // PLAY
    audio.muted = false;  // unmute on user interaction
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } 
  else {
    // PAUSE
    audio.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}
