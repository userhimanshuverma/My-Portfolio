document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const sidebar = document.querySelector('.sidebar');

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
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
                document.body.classList.add('dark-mode');
                if (sidebar) sidebar.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                document.body.classList.remove('dark-mode');
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
});
