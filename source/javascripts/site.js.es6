window.addEventListener('load', (event) => {
  const loader = document.querySelector('#loader_container');
  const header = document.querySelector('header');
  setTimeout(() => {
    loader.classList.add("loaderOut");
    header.classList.add("headerIn");
    setTimeout(() => {
      loader.parentNode.removeChild(loader);
    }, 2000);
  }, 6500);
});

const end = document.getElementById('end');
const body = document.querySelector('body');
const progressBar = document.querySelector('#bar');
const progressArrow = document.querySelector('#arrow');
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const scrollDownText = document.querySelector('.scroll_down-text');
const social = document.querySelector('.social-container');
let scrollProgress;

// Menu anchor links

$(document).ready(function() {
  $("a.smooth-scroll").on('click', function(event) {
      event.preventDefault();
      var section = $(this).attr("href");
      $('html, body').animate({
          scrollTop: $(section).offset().top
      }, 750, function() {
          location.hash = section;
      });
      return false;
  });
});

$(document).on("scroll", function() {
  var scrollDistance = $(window).scrollTop();
  $(".page-section").each(function(i) {
    if ($(this).offset().top <= scrollDistance + 10) {
      $("nav li a").removeClass("menu-active");
      $("nav li a")
        .eq(i)
        .addClass("menu-active");
    } else {
      $("nav li a")
        .eq(i)
        .removeClass("menu-active");
    }
  });
});

window.addEventListener('scroll', () => {
  scrollProgress = window.pageYOffset * 100 / (body.offsetHeight - window.innerHeight);
  progressBar.style.height = Math.ceil(scrollProgress) + "%";
  progressArrow.style.top = Math.ceil(scrollProgress) + "%";

  if (scrollProgress > 90) {
    scrollDownText.classList.add('fadeOut');
  } else {
    scrollDownText.classList.remove('fadeOut');
  }

  if (scrollProgress > 98 && window.screen.width < 1000) {
    social.classList.remove('fadeOut');
  } else {
    social.classList.add('fadeOut');
  }
})

const animItems = document.querySelectorAll('.anim');

const config = {
  root: null,
  rootMargin: '20% 0% -20% 0%'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('anim_fadeInUp');
      observer.unobserve(entry.target);
    }
  });
}, config);

animItems.forEach(item => {
  observer.observe(item);
});

// Custom cursor

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px");
})

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('expand');
  });
  link.addEventListener('mouseout', () => {
    cursor.classList.remove('expand');
  });
});

// Work dyamic hover

const works = document.querySelectorAll('.work_list a');
const thumb = document.querySelector('.work-thumb');
let mouseX;
let mouseY;

works.forEach((work) => {
  work.addEventListener('mouseover', () => {
    thumb.style.display = "block";
    thumb.style.opacity = "0.9";
    thumb.style.backgroundImage = "url('" + work.dataset.img + "')";
  });

  work.addEventListener('mouseout', () => {
    thumb.style.display = "none";
    thumb.style.opacity = "0";
    thumb.style.backgroundImage = "none";
  });
})

document.addEventListener('mousemove', e => {
  thumb.style.top = (e.pageY - 145) + "px";
  thumb.style.left = (e.pageX - 250) + "px";
})

// Paroller parallax

$('.my-paroller').paroller();

$("#h1_title").paroller({
  factor: 0.1,
  factorXs: 0.1,
  factorSm: 0.1,
  factorMd: 0.1,
  factorLg: 0.1,
  type: "foreground",
  direction: "vertical"
});
$("#silhouette").paroller({
  factor: 0.2,
  factorXs: 0.2,
  factorSm: 0.2,
  factorMd: 0.2,
  factorLg: 0.2,
  type: "foreground",
  direction: "vertical"
});
$("#dots_front").paroller({
  factor: 0.5,
  factorXs: 0.5,
  factorSm: 0.5,
  factorMd: 0.5,
  factorLg: 0.5,
  type: "foreground",
  direction: "vertical"
});
$("#dots_back").paroller({
  factor: -0.1,
  factorXs: -0.1,
  factorSm: -0.1,
  factorMd: -0.1,
  factorLg: -0.1,
  type: "foreground",
  direction: "vertical"
});
$("#subtitle").paroller({
  factor: 0.3,
  factorXs: 0.3,
  factorSm: 0.3,
  factorMd: 0.3,
  factorLg: 0.3,
  type: "foreground",
  direction: "vertical"
});
