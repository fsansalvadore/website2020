const loader = document.querySelector('#loader_container');
const header = document.querySelector('header');
const fixedElements = document.querySelector('.fixed_elements');
const end = document.getElementById('end');
const body = document.querySelector('body');
const progressBar = document.querySelector('#bar');
const progressArrow = document.querySelector('#arrow');
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const scrollDownText = document.querySelector('.scroll_down-text');
const social = document.querySelector('.social-container');
const exitBtn = document.getElementById('exit_modal');
const privacyModal = document.getElementById('privacy_modal-container');
const privacyOpen = document.getElementById('privacy_open');

let scrollProgress;
let mouseX;
let mouseY;

const loaderOut = () => {
  loader.classList.add("loaderOut");
  header.classList.add("headerIn");
  fixedElements.classList.add("fixedIn");
  header.style.opacity = "1";
  setTimeout(() => {
    loader.parentNode.removeChild(loader);
  }, 2000);
}

window.addEventListener('load', (event) => {
  setTimeout(() => {
    loaderOut();
  }, 6500);

  loader.addEventListener('click', () => {
    loaderOut();
  })

  // Work dyamic hover

  if (window.matchMedia("(min-width: 1000px)").matches) {
    const works = document.querySelectorAll('.work_list a');
    const thumb = document.querySelector('.work-thumb');

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
  } else {
    return
  }
});

privacyOpen.addEventListener('click', (e) => {
  e.preventDefault();
  body.style.overflowY = 'none';
  privacyModal.style.display = 'flex';
  exitBtn.style.display = 'flex';
  setTimeout(() => {
    privacyModal.classList.add('show');
    exitBtn.classList.add('show');
  }, 200);
})

exitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  privacyModal.classList.remove('show');
  exitBtn.classList.remove('show');
  body.style.overflowY = 'auto';
  setTimeout(() => {
    privacyModal.style.display = 'none';
    exitBtn.style.display = 'none';
  }, 200);
})

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
    if ($(this).offset().top <= scrollDistance + 300) {
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

// Custom cursor

document.addEventListener('mousemove', e => {
  mouseY = e.pageY
  mouseX = e.pageX
  cursor.setAttribute("style", "top: " + mouseY + "px; left: " + mouseX + "px");
})

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('expand');
  });
  link.addEventListener('mouseout', () => {
    cursor.classList.remove('expand');
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
  } else if (scrollProgress < 98 && window.screen.width < 1000) {
    social.classList.add('fadeOut');
  }
})

IntersectionObserver.prototype.POLL_INTERVAL = 100; // Time in milliseconds.

const animItems = document.querySelectorAll('.anim');

// if (browser.name === 'iOS Safari' && browser.version < 13.3) {
//   animItems.forEach(item => {
//   });
// };

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

if ('IntersectionObserver' in window || !!window.IntersectionObserver) {
  animItems.forEach(item => {
    observer.observe(item);
  });
} else {
  animItems.forEach(item => {
    item.classList.add('anim_fadeInUp');
  });
}


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
