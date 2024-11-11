// Smooth Scrolling Effect and Toggle Info
$(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500); 
        }
    });

    // Toggle additional info with animation
    $('#toggle-info-btn').click(function() {
        $('#additional-info').toggle(500); // Toggles visibility with animation
    });
});

// Contact Form Validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }

    // Simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

// Carousel Slideshow
$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.carousel-slide');
    const totalSlides = slides.length;

    // Show the current slide and hide others
    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    // Move to the next slide
    $('#next').click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    // Move to the previous slide
    $('#prev').click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    // Automatic slideshow
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 3000); // Change image every 3 seconds

    // Show the first slide on page load
    showSlide(currentIndex);
});

$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.carousel-slide');
    const totalSlides = slides.length;

    // Show the current slide and hide others with animation
    function showSlide(index) {
        slides.removeClass('show'); // Remove the class from all slides
        slides.eq(index).addClass('show'); // Add class to the current slide
    }

    // Move to the next slide
    $('#next').click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    // Move to the previous slide
    $('#prev').click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    // Automatic slideshow
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 3000); // Change image every 3 seconds

    // Show the first slide on page load
    showSlide(currentIndex);
});
