// Drop-Down menu in Navbar for smaller screens
window.onload = function() {
    const dropDown = document.getElementById('Navbar-Drop-Down');
    const navbarUl = document.getElementById('Navbar-ul');

    dropDown.addEventListener('click', () => {
        navbarUl.classList.toggle('Navbar-active');
        setTimeout(() => {
            navbarUl.classList.toggle('Navbar-active2');
        }, 0);
    });
    

    var navbarLinks = document.getElementsByClassName('Navbar-Links');

    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener('click', () => {
            navbarUl.classList.remove('Navbar-active');
            navbarUl.classList.remove('Navbar-active2');
        });
    };
    
    const contactSubmit = document.getElementById('Contact-Form');
    const contactResponse = document.getElementById('Contact-Response');
    const reset = document.getElementById('Contact-Reset');

    contactSubmit.addEventListener('submit', () => {
        reset.click();
        contactResponse.classList.add('Response-Active');
        setTimeout(() => {
            contactResponse.classList.remove('Response-Active');
        }, 4000);
    });
};