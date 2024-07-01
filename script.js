document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate progress bars on load
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = 0;
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 500);
    });

    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formSuccess.style.display = 'none';
        formError.style.display = 'none';

        // Perform the AJAX request
        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                formSuccess.style.display = 'block';
                contactForm.reset();
            } else {
                formError.style.display = 'block';
            }
        })
        .catch(error => {
            formError.style.display = 'block';
        });
    });
});