let graduationDate;

function updateTargetDate() {
    const year = document.getElementById('gradYear').value;
    graduationDate = new Date(year, 6, 1, 10, 0, 0); // Month is 0-indexed, so 4 = May
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

document.addEventListener('DOMContentLoaded', function () {
    updateTargetDate();
    document.getElementById('gradYear').addEventListener('change', updateTargetDate);
    setInterval(updateCountdown, 1000);
});