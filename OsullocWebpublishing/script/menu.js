const main = document.querySelectorAll('nav > ul > .list:nth-of-type(1) > a:nth-of-type(1)');
const mainTwo = document.querySelectorAll('nav > ul > .list:nth-of-type(4) > a:nth-of-type(4)');
const subMenu = document.querySelectorAll('nav > ul > .list:nth-of-type(1) > .list-sub-menu:nth-of-type(1) > li');
const subMenuTwo = document.querySelectorAll('nav > ul > .list:nth-of-type(4) > .list-sub-menu:nth-of-type(4) > li');

  main.addEventListener("mouseenter", ()=> {
    subMenu.classList.add('active');
  });
  main.addEventListener("mouseleave", ()=> {
    subMenu.classList.remove('active');
  });

  mainTwo.addEventListener('mouseenter', ()=> {
    subMenuTwo.classList.add('active')
  });
  mainTwo.addEventListener('mouseleave', ()=> {
    subMenuTwo.classList.remove('active')
  });