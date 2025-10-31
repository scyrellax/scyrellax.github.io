window.addEventListener('load', function() {
  const initMusicPlayer = function() {
    const musicPixel = document.querySelector('.music-controls');
    const audio = document.querySelector('#tune');
    const playIcon = document.querySelector('.playy');
    const pauseIcon = document.querySelector('.pausee');

    if (!musicPixel || !audio) return;

    // start muted autoplay
    audio.muted = true;
    audio.play().then(() => {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    }).catch(err => {
      console.log('Autoplay blocked:', err);
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    });

    // toggle play/pause
    musicPixel.addEventListener('click', function() {
      if (audio.paused) {
        audio.muted = false;
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
      } 
      else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
    });
  };

  initMusicPlayer();
});
