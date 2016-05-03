/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */


/* Otherwise just put the config content (json): */

particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 82,
      "density": {
        "enable": true,
        "value_area": 1683.5826639087988
      }
    },
    "color": {
      "value": "#1d8db6"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "",
        "width": 160,
        "height": 100
      }
    },
    "opacity": {
      "value": 7.3928359549120531,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5.16241544246026904,
        "opacity_min": 0.03248308849205381,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 8.872463273808071,
        "size_min": 7.308694910712106,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 32.06824121731046,
      "color": "#ffffff",
      "opacity": 0.2244776885211732,
      "width": 6.734330655635196
    },
    "move": {
      "enable": true,
      "speed": 2.5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "remove"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 10,
        "duration": 2,
        "opacity": 50,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}

);
