const menuButton = document.getElementById('menuButton');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu .mobile-links > a');

const openCloseMenu = () => {
  const isHidden = mobileMenu.style.display === 'none'

  if (isHidden) {
    menuButton.classList.add('open')

    return mobileMenu.style.display = '';
  }

  menuButton.classList.remove('open')
  mobileMenu.style.display = 'none';
}

menuButton.addEventListener('click', openCloseMenu)

mobileLinks.forEach(link => {
  link.addEventListener('click', openCloseMenu)
})
