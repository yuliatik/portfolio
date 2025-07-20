
//     document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll('.project-card');

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target); 
//         }
//       });
//     }, { threshold: 0.1 });

//     cards.forEach(card => observer.observe(card));
//   });

//   document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll('.project-card');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.1 });

//   cards.forEach(card => observer.observe(card));

//     const btn = document.querySelector(".btn");
//   btn.addEventListener("mouseenter", () => {
//     gsap.to(btn, {duration: 0.5, rotation: 15, y: -10, ease: "power1.out"});
//   });
//   btn.addEventListener("mouseleave", () => {
//     gsap.to(btn, {duration: 0.5, rotation: 0, y: 0, ease: "power1.in"});
//   });

 
// });

document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(TextPlugin);

  gsap.to(".heading", {
    duration: 4,
    text: "Hi! My name is Yulia.",
    ease: "none",
    delay: 0.5,
  });

  
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));


  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.5,
        rotation: 15,
        y: -10,
        ease: "power1.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        duration: 0.5,
        rotation: 0,
        y: 0,
        ease: "power1.in",
      });
    });
  }
});

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
      "value": "#BEADFA"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.1,
        "width": .7
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
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
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
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
    "retina_detect": true
  });



// window.openModal = id => {
//       document.getElementById(`modal-${id}`).style.display = 'flex';
//     };
//     window.closeModal = id => {
//       document.getElementById(`modal-${id}`).style.display = 'none';
//     };
//     document.addEventListener('click', e => {
//       document.querySelectorAll('.project-modal').forEach(modal => {
//         if (modal.style.display === 'flex' &&
//             !e.target.closest('.modal-content') &&
//             !e.target.closest('.project-card')) {
//           modal.style.display = 'none';
//         }
//       });
//     });

// function openModal() {
//   document.getElementById("modal").style.display = "flex";
//   document.querySelector(".project-card").style.display = "none";
// }

// function closeModal() {
//   document.getElementById("modal").style.display = "none";
//   document.querySelector(".project-card").style.display = "block";
// }

// const modal = document.getElementById('modal');
// const projectCard = document.getElementById('projectCard');
// const closeBtn = document.getElementById('closeModal');

// projectCard.addEventListener('click', () => {
//   modal.style.display = 'flex';
// });

// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });

const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.project-content h3').textContent;
    const techStack = card.querySelector('.project-content .tech').textContent;
    const img = card.querySelector('.project-content img');
    const details = card.querySelector('.project-details');

    // Заполняем модал
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalTechStack').textContent = techStack;
    document.getElementById('modalImg').src = img.src;
    document.getElementById('modalImg').alt = img.alt;

    // Описание и список
    const desc = details.querySelector('p:nth-of-type(2)').innerHTML;
    const features = details.querySelector('ul').innerHTML;
    const links = details.querySelector('.project-links').innerHTML;

    document.getElementById('modalDescription').innerHTML = desc;
    // document.getElementById('modalFeatures').innerHTML = features;
    document.getElementById('modalFeatures').innerHTML = `<p class="list-title"><strong>Functionality:</strong></p>${features}`;
    document.getElementById('modalLinks').innerHTML = links;
    modal.style.display = 'flex';
  });
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрыть при клике вне модалки
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});














  

  

  
