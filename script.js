let graduationDate = new Date('July 1, 2026 00:00:00');

function updateTargetDate() {
    const selectedYear = document.getElementById('gradYear').value;
    graduationDate = new Date(`${selectedYear}-07-01T00:00:00`);
    updateCountdown();
}

function updateCountdown() {
    const now = new Date();
    const diff = graduationDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '🎉 Graduated! 🎉';
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

// Initial setup
updateCountdown();
setInterval(updateCountdown, 1000);
