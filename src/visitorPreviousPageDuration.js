export default function() {
    let duration = null;
    if (localStorage.geniusSavedTime) {
        const currentTime = Date.parse(new Date());
        const storedTime = Date.parse(localStorage.geniusSavedTime);
        duration = (currentTime - storedTime) / 1000;
    }
    localStorage.setItem('geniusSavedTime', new Date());
    //TODO: Use cookies instead due to http/https issues? clears localStorage
    return duration;
}