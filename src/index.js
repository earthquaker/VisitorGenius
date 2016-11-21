import visitorLastPageDuration from './visitorPreviousPageDuration';
import visitorPreviousPageHistory from './visitorPreviousPageHistory';

(function(){
    const lastPageDuration = visitorLastPageDuration();
    console.log(lastPageDuration);

    const previousPageHistory = visitorPreviousPageHistory();
    console.log(previousPageHistory);
})();