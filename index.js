//Navbar constants
const hamburger_menu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('header nav');

//Section constants
const links = document.querySelector('.links').querySelectorAll('a');
const sections = document.querySelector('main').querySelectorAll('section');

//Portfolio constants
const arrowBtn = document.querySelectorAll('.arrow');

//Contact-form constant
const inputs = document.querySelectorAll(".input");

const closeMenu = () => {
  navbar.classList.remove('open')
}

hamburger_menu.addEventListener('click', () => {
  if(!navbar.classList.contains('open')){
    navbar.classList.add('open')
  }else{
    closeMenu();
  }
})


//Select Page
links.forEach(link => {
  link.addEventListener('click', (e) => {
    const loweredId = e.target.innerHTML.toLowerCase();
    sections.forEach(section => {
      if(section.id === loweredId){
        section.classList.remove('inactive');
        section.classList.add('active');
        closeMenu()
      }else{
        section.classList.remove('active');
        section.classList.add('inactive');
      }
    })
  })
})

//Portfolio filter buttons

arrowBtn.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const SelectedCardDescription = arrow.parentElement.parentElement;
    
    SelectedCardDescription.classList.contains('dropdown') ? 
    SelectedCardDescription.classList.remove('dropdown') :
    SelectedCardDescription.classList.add('dropdown');

    arrow.classList.contains('rotate') ?
    arrow.classList.remove('rotate') :
    arrow.classList.add('rotate');
  })
})

//Contact-form inputs

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
