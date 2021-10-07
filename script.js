// Drop-Down menu in Navbar for smaller screens
window.onload = function() {
    const dropDown = document.getElementById('Navbar-Drop-Down');
    const navbarUl = document.getElementById('Navbar-ul');

    dropDown.addEventListener('click', () => {
        navbarUl.classList.toggle('Navbar-active');
    });

    
    const contactSubmit = document.getElementById('Contact-Submit');
    const contactResponse = document.getElementById('Contact-Response');

    contactSubmit.addEventListener('click', () => {
        contactResponse.classList.add('Response-Active');
        setTimeout(() => {
            contactResponse.classList.remove('Response-Active');
        }, 4000);
    });s
};