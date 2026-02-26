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
        top: '53.5%',
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
          end: '+=400',
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
        top: '53.5%',
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
          end: '+=400',
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
