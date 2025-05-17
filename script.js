// Initialize graduation date
let graduationDate;

// Function to update the target graduation date
function updateTargetDate() {
    const year = document.getElementById('gradYear').value;
    // Set graduation date to July 1st of the selected year
    graduationDate = new Date(year, 6, 1, 10, 0, 0); // Month is 0-indexed, so 6 = July
    updateCountdown();
}

function updateCountdown() {
    const now = new Date();
    const diff = graduationDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<div class="graduated">🎉 Graduated! 🎉</div>';
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Initialize date on page load
document.addEventListener('DOMContentLoaded', function () {
    // Set default selected year to the first option
    updateTargetDate();

    // Set up the event listener
    document.getElementById('gradYear').addEventListener('change', updateTargetDate);

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});