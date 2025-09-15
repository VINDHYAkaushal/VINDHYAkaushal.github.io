// Dynamic header on scroll
document.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animate progress bars on scroll
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.disconnect(); // Disconnect after the first animation
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

observer.observe(skillsSection);

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('form-message');

    // Simulate an API call
    setTimeout(() => {
        // Here you would typically send the data to a backend server
        console.log('Form data:', Object.fromEntries(formData.entries()));

        messageDiv.textContent = 'Thank you! Your message has been sent.';
        messageDiv.style.color = '#2ecc71';
        form.reset();

        setTimeout(() => {
            messageDiv.textContent = '';
        }, 5000);
    }, 1000);
});
