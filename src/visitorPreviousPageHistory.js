export default function() {
    const currentHistory = localStorage.getItem('geniusHistory');
    if (currentHistory) {
        localStorage.setItem('geniusHistory', window.location.href + ',' + currentHistory);
    } else {
        localStorage.setItem('geniusHistory', window.location.href)
    }
    // TODO: return array??
    return localStorage.getItem('geniusHistory');
}