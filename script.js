// Drop-Down menu in Navbar for smaller screens
window.onload = function() {
    const dropDown = document.getElementById('Navbar-Drop-Down');
    const navbarUl = document.getElementById('Navbar-ul');

    dropDown.addEventListener('click', () => {
    navbarUl.classList.toggle('Navbar-active');
    });
};