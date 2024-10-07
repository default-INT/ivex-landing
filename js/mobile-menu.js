const menuButton = document.getElementById('menuButton');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu .mobile-links > a');

const burgerIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
    <path fill="#D9D9D9" d="M0 0h24v24H0z"/>
  </mask>
  <g mask="url(#a)">
    <path fill="#BBD7F7" d="M5 15a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 14c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h14c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.29-.71.29H5Zm0-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h14c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.29-.71.29H5Z"/>
  </g>
</svg>
`

const crossIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
    <path fill="#D9D9D9" d="M0 0h24v24H0z"/>
  </mask>
  <g mask="url(#a)">
    <path fill="#BBD7F7" d="m12 13.4-4.9 4.9a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27.18.18.27.42.27.7 0 .28-.09.52-.27.7L13.4 12l4.9 4.9c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27L12 13.4Z"/>
  </g>
</svg>
`

const openCloseMenu = () => {
  const isHidden = mobileMenu.style.display === 'none'

  if (isHidden) {
    menuButton.innerHTML = crossIcon

    return mobileMenu.style.display = '';
  }

  menuButton.innerHTML = burgerIcon
  mobileMenu.style.display = 'none';
}

menuButton.addEventListener('click', openCloseMenu)

mobileLinks.forEach(link => {
  link.addEventListener('click', openCloseMenu)
})
