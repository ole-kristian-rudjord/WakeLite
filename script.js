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
    

// Remove Drop-Down menu after clicking a link
    var navbarLinks = document.getElementsByClassName('Navbar-Links');

    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener('click', () => {
            navbarUl.classList.remove('Navbar-active');
            navbarUl.classList.remove('Navbar-active2');
        });
    };
    

// Response and reset after contact submit
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


// Fade-in
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })
};