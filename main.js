document.querySelectorAll(".slide-from-left").forEach((node) => {
  let anDelay = Math.round((Math.random() * (2 - 0.5) + 0.5) * 10) / 10;
  node.style.animationDelay = anDelay + "s";
});

// Landing Swiper Instance

const swiper = new Swiper(".swiper", {
  direction: "vertical",

  loop: true,

  navigation: {
    nextEl: '.slideshow-next',
    prevEl: '.slideshow-prev',
  },

  autoplay: {
    delay: 3000,
  },

  speed: 1000,
});

// Captcha Spam Checker

const subForm = document.getElementById('subscribe-form');

subForm.addEventListener('submit', function(e) {

    const hCaptcha = subForm.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});