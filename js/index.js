const bur_open = document.querySelector('.nav__inner_list')
const btn = document.querySelector('.site_header__burger');
const btns_cl = document.querySelector('.nav__btns');
const body = document.querySelector('body');
const site_head = document.querySelector('.site_header');
// const h2 = document.querySelector('.hero_inner h2');
btn.addEventListener('click', () => {
  bur_open.classList.toggle('open');
  btns_cl.classList.toggle('open');
  body.classList.toggle('overflow');
  site_head.classList.toggle('bgcol');
  btn.classList.toggle('exit');
  // h2.classList.toggle('remove');
});
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 550px)").matches) {
    bur_open.classList.remove('open');
    site_head.classList.remove('bgcol');
    btn.classList.remove('exit');
    body.classList.remove('overflow');
  }
});
site_head.addEventListener("scroll", ()=> {
  if (document.scrollTop > 0){
    site_head.classList.toggle('bgcol');
  }
});
