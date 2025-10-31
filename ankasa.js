window.addEventListener("load", () => {
  const audio = document.getElementById("tune");
  const playIcon = document.querySelector(".playy");
  const pauseIcon = document.querySelector(".pausee");

  // delay for loading
  setTimeout(() => {
    // force icons
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";

    audio.play().catch(() => {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    });
  }, 300);
});

function songstart() {
  const audio = document.getElementById("tune");
  const playIcon = document.querySelector(".playy");
  const pauseIcon = document.querySelector(".pausee");

  if (audio.paused) {
    audio.muted = false; // unmute when user interacts
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } 
  else {
    audio.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}
