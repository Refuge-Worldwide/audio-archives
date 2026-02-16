// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const logo = document.getElementById('logo');
const radioLogos = document.getElementById('radio-logos');

// Use GSAP's matchMedia for better responsive handling
ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 769px)": function () {
    gsap.fromTo(logo,
      {
        top: '50%',
        y: '-50%',
        width: '675px'
      },
      {
        top: '50px',
        y: '0',
        width: '264px',
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

  // Mobile
  "(max-width: 768px)": function () {
    gsap.fromTo(logo,
      {
        top: '50%',
        y: '-50%',
        width: '80vw'
      },
      {
        top: '50px',
        y: '0',
        width: '50vw',
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
            trigger: radioLogos,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.25,
            pin: false
          }
        }
      );
    }
  }
});
