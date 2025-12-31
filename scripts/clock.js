function startClock(clockElement) {
    updateClock(clockElement);

    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;
    setTimeout(function() {startClock(clockElement)}, delay);
}

function updateClock(clockElement) {
    const today = new Date();
    let h = today.getHours();
    let m = String(today.getMinutes()).padStart(2, "0");

    const ampm = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;

    clockElement.innerHTML = `${h}:${m} ${ampm}`;
}