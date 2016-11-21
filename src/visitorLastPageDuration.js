export default function() {
    let duration = null;
    if (localStorage.vngageSavedTime) {
        const currentTime = Date.parse(new Date());
        const storedTime = Date.parse(localStorage.vngageSavedTime);
        duration = (currentTime - storedTime) / 1000;
    }
    // Store New Date
    localStorage.setItem('vngageSavedTime', new Date());
    // Return Previous Page Duration
    return duration;
}