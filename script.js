document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (sidebar) {
            sidebar.classList.add('dark-mode');
        }
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }

    // Dark mode toggle functionality
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                if (sidebar) sidebar.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                if (sidebar) sidebar.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Typing effect functionality
    const texts = [
        "🚀 Software Engineer @ Acceldata",
        "☁️ Big Data & Cloud Enthusiast",
        "🌟 Open-Source Contributor"
    ];

    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        const dynamicText = document.getElementById('dynamic-text');
        if (dynamicText) {
            dynamicText.textContent = letter;
        }

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause 2 seconds before next
        } else {
            setTimeout(type, 100); // Typing speed
        }
    }

    type(); // Start typing effect after DOM loaded

    // Responsive Sidebar Toggle for Mobile View
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            if (sidebar) {
                sidebar.classList.toggle('active');
            }
        });
    }

    // Adjust layout for small screens
    function adjustLayoutForSmallScreens() {
        if (window.innerWidth <= 768) {
            // Mobile view: Sidebar hidden by default, toggle visibility
            if (sidebar) {
                sidebar.style.display = 'none';
            }
            body.classList.add('mobile-view');
        } else {
            // Desktop view: Sidebar always visible
            if (sidebar) {
                sidebar.style.display = 'block';
            }
            body.classList.remove('mobile-view');
        }
    }

    // Call the function on load and window resize
    adjustLayoutForSmallScreens();
    window.addEventListener('resize', adjustLayoutForSmallScreens);

});
