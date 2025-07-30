// Hamburger menu query selectors for accessibility on web page
const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})