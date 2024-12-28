document.addEventListener('DOMContentLoaded', function () {
    const newYearTime = new Date('January 01, 2025 00:00:00');

    updateCountdown(); // Ensure it runs immediately once too
    setInterval(updateCountdown, 1000); // Ensure the countdown updates every second

    document.getElementById('font-toggle').addEventListener('click', toggleChangeFont);
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

    function updateCountdown() {
        const currentTime = new Date();
        const diff = newYearTime - currentTime;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update the DOM with the new time
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.getElementById('dark-mode-toggle').textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }

    function toggleChangeFont() {
        // Toggle the 'digital-font' class on these elements
        document.getElementById('days-section').classList.toggle('digital-font');
        document.getElementById('time-section').classList.toggle('digital-font');
    }
});
