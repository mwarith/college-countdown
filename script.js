let graduationDate;
const CACHE_KEY = 'graduationDate';
const DEFAULT_DATE = '2026-06-14'; // Default: June 9, 2026

// Save date to localStorage
function saveGraduationDate(dateStr) {
    localStorage.setItem(CACHE_KEY, dateStr);
}

// Load date from localStorage
function loadGraduationDate() {
    return localStorage.getItem(CACHE_KEY) || DEFAULT_DATE;
}

// Clear cache and reset to default
function clearCache() {
    localStorage.removeItem(CACHE_KEY);
    document.getElementById('gradDate').value = DEFAULT_DATE;
    updateTargetDate();
}

function updateTargetDate() {
    const dateStr = document.getElementById('gradDate').value;
    const [year, month, day] = dateStr.split('-');
    graduationDate = new Date(year, month - 1, day, 12, 0, 0); // Month is 0-indexed
    saveGraduationDate(dateStr); // Save to cache whenever date changes
    updateCountdown();
}

function updateCountdown() {
    const diff = graduationDate - new Date();

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
    // Load saved date or use default
    const savedDate = loadGraduationDate();
    document.getElementById('gradDate').value = savedDate;

    updateTargetDate();
    document.getElementById('gradDate').addEventListener('change', updateTargetDate);
    document.getElementById('clearCache').addEventListener('click', clearCache);
    setInterval(updateCountdown, 1000);
});