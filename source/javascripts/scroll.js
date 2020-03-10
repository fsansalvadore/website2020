const scroll = () => {
  const end = document.getElementById('end');
  const body = document.querySelector('body');
  const progressBar = document.querySelector('#bar');
  const progressArrow = document.querySelector('#arrow');
  const cursor = document.querySelector('.cursor');
  const links = document.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    let scrollProgress = window.pageYOffset * 100 / (body.offsetHeight - window.innerHeight);
    progressBar.style.height = Math.ceil(scrollProgress) + "%";
    progressArrow.style.top = Math.ceil(scrollProgress) + "%";
  })

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
}

export { scroll }:
