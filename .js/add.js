// app.js

// Get the toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode is already saved in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme (if any)
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggleButton.classList.add('dark-mode');
    }
}

// Event listener for the button to toggle themes
themeToggleButton.addEventListener('click', () => {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // Toggle the button's dark mode style
    themeToggleButton.classList.toggle('dark-mode');

    // Save the current theme to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});
