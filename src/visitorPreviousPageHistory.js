export default function() {
    const currentHistory = localStorage.getItem('geniusHistory');
    if (currentHistory) {
        localStorage.setItem('geniusHistory', window.location.href + ',' + currentHistory);
    } else {
        localStorage.setItem('geniusHistory', window.location.href)
    }
    return localStorage.getItem('geniusHistory');
}