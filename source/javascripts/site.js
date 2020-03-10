const end = document.getElementById('end');
const body = document.querySelector('body');
const progressBar = document.querySelector('#bar');
const progressArrow = document.querySelector('#arrow');
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
let scrollProgress;

window.addEventListener('scroll', () => {
  scrollProgress = window.pageYOffset * 100 / (body.offsetHeight - window.innerHeight);
  progressBar.style.height = Math.ceil(scrollProgress) + "%";
  progressArrow.style.top = Math.ceil(scrollProgress) + "%";
})

const animItems = document.querySelectorAll('.anim');

const config = {
  root: null,
  rootMargin: '20% 0% -20% 0%'
};

observer = new IntersectionObserver((entries) => {
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
// custom cursor

// document.addEventListener('mousemove', e => {
//   cursor.setAttribute("style", "top: " + (e.pageY - 12) + "px; left: " + (e.pageX - 12) + "px");
// })

// links.forEach((link) => {
//   link.addEventListener('mouseover', () => {
//     console.log("Hovered on link.");
//     cursor.classList.add('expand');
//     setTimeout(() => {
//       cursor.classList.remove('expand');
//     }, 2000);
//   });
// });

// work hover

const works = document.querySelectorAll('.work_list a');
const thumb = document.querySelector('.work-thumb');
let mouseX;
let mouseY;

// console.log(works);

// document.addEventListener('mousemove', e => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
//   console.log("X: " + mouseX + " — Y: " + mouseY);

// });


works.forEach((work) => {
  console.log(work.dataset.img);

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

