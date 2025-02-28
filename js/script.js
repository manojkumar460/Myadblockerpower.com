// Redirect to the test page when a card is clicked
function startTest(level) {
    window.location.href = level + ".html"; // Redirect to respective test page
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = "☀ Light Mode";
    } else {
        themeToggle.innerHTML = "🌙 Dark Mode";
    }
});
