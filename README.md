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