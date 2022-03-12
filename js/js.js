/*smooth scroll*/
const arrow = document.querySelectorAll('.scroll-link');
for (const arrows of arrow) {
  arrows.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href');
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    let position = element.offsetTop;
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
}
/*this for the scroll back to home*/
const navH = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navH.getBoundingClientRect().height;
  console.log(navHeight);
  if (scrollHeight > 100) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
