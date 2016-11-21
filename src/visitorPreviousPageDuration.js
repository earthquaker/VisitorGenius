export default function() {
    let duration = null;
    if (localStorage.geniusSavedTime) {
        const currentTime = Date.parse(new Date());
        const storedTime = Date.parse(localStorage.geniusSavedTime);
        duration = (currentTime - storedTime) / 1000;
    }
    // Store New Date
    localStorage.setItem('geniusSavedTime', new Date());
    // Return Previous Page Duration
    return duration;
}