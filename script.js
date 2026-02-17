// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const logo = document.getElementById('logo');
const radioLogos = document.getElementById('radio-logos');

// Use GSAP's matchMedia for better responsive handling
ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 1025px)": function () {
    gsap.fromTo(logo,
      {
        top: '50%',
        y: '-50%',
        scale: 1
      },
      {
        top: '50px',
        y: '0',
        scale: 264 / 675,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=500',
          scrub: 0.25,
          pin: false
        }
      }
    );
  },

  // Tablet/Mobile
  "(max-width: 1024px)": function () {
    gsap.fromTo(logo,
      {
        top: '50%',
        y: '-50%',
        scale: 1
      },
      {
        top: '50px',
        y: '0',
        scale: 165 / 350,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=500',
          scrub: 0.25,
          pin: false
        }
      }
    );
  },

  // All screen sizes
  "all": function () {
    if (radioLogos) {
      gsap.fromTo(radioLogos,
        { rotation: 0 },
        {
          rotation: -180,
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.25,
            pin: false
          }
        }
      );
    }

    gsap.fromTo('#down-arrow',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=200',
          scrub: 0.25,
          pin: false
        }
      }
    );
  }
});

// Mux Player Custom Controls
const player = document.getElementById('mux-player');
const muteBtn = document.getElementById('mute-btn');
const playBtn = document.getElementById('play-btn');
const muteIcon = document.getElementById('mute-icon');
const playIcon = document.getElementById('play-icon');

if (player && muteBtn && playBtn) {
  // Mute/Unmute toggle
  muteBtn.addEventListener('click', () => {
    player.muted = !player.muted;

    if (player.muted) {
      // Show muted icon (speaker with X)
      muteIcon.setAttribute('d', 'M11 5L6 9H2v6h4l5 4V5z M23 9l-6 6 M17 9l6 6');
      muteBtn.setAttribute('aria-label', 'Unmute');
    } else {
      // Show unmuted icon (speaker with waves)
      muteIcon.setAttribute('d', 'M11 5L6 9H2v6h4l5 4V5z M15.54 8.46a5 5 0 0 1 0 7.07');
      muteBtn.setAttribute('aria-label', 'Mute');
    }
  });

  // Play/Pause toggle
  playBtn.addEventListener('click', () => {
    if (player.paused) {
      // Seek to live edge for live streams before playing
      if (player.streamType === 'live' || player.streamType === 'live:dvr') {
        player.currentTime = player.duration;
      }
      player.play();
      // Show pause icon
      playIcon.setAttribute('d', 'M6 4h4v16H6zM14 4h4v16h-4z');
      playBtn.setAttribute('aria-label', 'Pause');
    } else {
      player.pause();
      // Show play icon
      playIcon.setAttribute('d', 'M5 3l14 9-14 9V3z');
      playBtn.setAttribute('aria-label', 'Play');
    }
  });

  // Update play button icon based on player state
  player.addEventListener('play', () => {
    playIcon.setAttribute('d', 'M6 4h4v16H6zM14 4h4v16h-4z');
    playBtn.setAttribute('aria-label', 'Pause');
  });

  player.addEventListener('pause', () => {
    playIcon.setAttribute('d', 'M5 3l14 9-14 9V3z');
    playBtn.setAttribute('aria-label', 'Play');
  });
}
