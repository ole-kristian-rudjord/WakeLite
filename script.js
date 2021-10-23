
window.onload = function() {
    console.log("Welcome to the console :) \n-Ole Kristian Rudjord")

// Drop-Down menu in Navbar for smaller screens
    const dropDown = document.getElementById('Navbar-Drop-Down');
    const navbarUl = document.getElementById('Navbar-ul');

    dropDown.addEventListener('click', () => {
        navbarUl.classList.toggle('Navbar-active');
        setTimeout(() => {
            navbarUl.classList.toggle('Navbar-active2');
        }, 0);
    });

// Order size
    const ProductSize = document.getElementById('Order-Images-Div');

    const ProductSizeSmall = document.getElementById('Order-Size-Small');
    const ProductSizeMedium = document.getElementById('Order-Size-Medium');
    const ProductSizeLarge = document.getElementById('Order-Size-Large');

    const ProductDimensionsSmall = document.getElementById('Order-Images-Dimensions-Small');
    const ProductDimensionsMedium = document.getElementById('Order-Images-Dimensions-Medium');
    const ProductDimensionsLarge = document.getElementById('Order-Images-Dimensions-Large');

    // ProductDimensionsMedium.classList.add('Active');

    ProductSizeSmall.addEventListener('click', () => {
        ProductSize.className = "";
        ProductSize.classList.add('Small');
        // ProductDimensionsSmall.classList.add('Active');
        // ProductDimensionsMedium.classList.remove('Active');
        // ProductDimensionsLarge.classList.remove('Active');
    });
    ProductSizeMedium.addEventListener('click', () => {
        ProductSize.className = "";
        ProductSize.classList.add('Medium');
        // ProductDimensionsSmall.classList.remove('Active');
        // ProductDimensionsMedium.classList.add('Active');
        // ProductDimensionsLarge.classList.remove('Active');
    });
    ProductSizeLarge.addEventListener('click', () => {
        ProductSize.className = "";
        ProductSize.classList.add('Large');
        // ProductDimensionsSmall.classList.remove('Active');
        // ProductDimensionsMedium.classList.remove('Active');
        // ProductDimensionsLarge.classList.add('Active');
    });


// Order top color
    const ProductTop = document.getElementById('Order-Img-Top');
    const ProductTopBlue = document.getElementById('Order-Top-Color-Blue');
    const ProductTopPink = document.getElementById('Order-Top-Color-Pink');
    const ProductTopOrange = document.getElementById('Order-Top-Color-Orange');
    const ProductTopYellow = document.getElementById('Order-Top-Color-Yellow');
    const ProductTopWhite = document.getElementById('Order-Top-Color-White');

    ProductTopBlue.addEventListener('click', () => {
        ProductTop.className = "";
        ProductTop.classList.add('Top-Blue');
    });
    ProductTopPink.addEventListener('click', () => {
        ProductTop.className = "";
        ProductTop.classList.add('Top-Pink');
    });
    ProductTopOrange.addEventListener('click', () => {
        ProductTop.className = "";
        ProductTop.classList.add('Top-Orange');
    });
    ProductTopYellow.addEventListener('click', () => {
        ProductTop.className = "";
        ProductTop.classList.add('Top-Yellow');
    });
    ProductTopWhite.addEventListener('click', () => {
        ProductTop.className = "";
        ProductTop.classList.add('Top-White');
    });

// Order bottom color
    const ProductBottom = document.getElementById('Order-Img-Bottom');
    const ProductBottomBlue = document.getElementById('Order-Bottom-Color-Blue');
    const ProductBottomPink = document.getElementById('Order-Bottom-Color-Pink');
    const ProductBottomOrange = document.getElementById('Order-Bottom-Color-Orange');
    const ProductBottomYellow = document.getElementById('Order-Bottom-Color-Yellow');
    const ProductBottomWhite = document.getElementById('Order-Bottom-Color-White');

    ProductBottomBlue.addEventListener('click', () => {
        ProductBottom.className = "";
        ProductBottom.classList.add('Bottom-Blue');
    });
    ProductBottomPink.addEventListener('click', () => {
        ProductBottom.className = "";
        ProductBottom.classList.add('Bottom-Pink');
    });
    ProductBottomOrange.addEventListener('click', () => {
        ProductBottom.className = "";
        ProductBottom.classList.add('Bottom-Orange');
    });
    ProductBottomYellow.addEventListener('click', () => {
        ProductBottom.className = "";
        ProductBottom.classList.add('Bottom-Yellow');
    });
    ProductBottomWhite.addEventListener('click', () => {
        ProductBottom.className = "";
        ProductBottom.classList.add('Bottom-White');
    });

    // var colorTopButton = document.getElementsByClassName("Order-Top-Color-Buttons");
    // var imageTop = document.getElementById('Order-Img-Top');
    // var i;

    // for (i = 0; i < colorTopButton.length; i++) {
    //     colorTopButton[i].addEventListener("click", function() {
    //         imageTop.classList.toggle("Top");
    //     });
    // };
    

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
        rootMargin: "0px 0px -200px 0px"
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


// Navbar highlight on scroll
    // const sections = document.querySelectorAll("section");
    // const navbarLinksForScroll = document.querySelectorAll(".Navbar-Links");

    // window.addEventListener('scroll', ()=> {
    //     let current = '';
    //     sections.forEach( section => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;
    //         if (scrollY >= sectionTop) {
    //             current = section.getAttribute('id');
    //         }
    //     })

    //     navbarLinksForScroll.forEach( a => {
    //         a.classList.remove('active');
    //         if(a.classList.contains(current)) {
    //             a.classList.add('active');
    //         }
    //     })
    // })
};