### VisitorGenius


#### Append script to website
```
(function(){
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.src = 'https://vg-elias.surge.sh/run.js';
	s.id = 'visitorGenius';
	document.head.appendChild(s);
})();
```

#### Remove script from website
```
(s=document.getElementById("visitorGenius")).parentNode.removeChild(s)
```

#### Similar shit but not the same?
```
http://tealium.com/products/audiencestream/
https://www.kissmetrics.com/triggers/
```

#### Keywords / Phrases
```
Visitor Engagement, real time visitor action engage, Engage Engine
```

#### Features
```
Previous Page Duration
Current Page Duration
Navigation History
Custom element eventListeners
Hockup/Listen to object/array/element changes
```

#### Possibilities
```
Out of the box integration with GTM for statistics
```

#### Things to solve / find a solution for
```
Evaluate for SPA applications (where no regular page load is done).
```