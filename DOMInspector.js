(function(w) {

	var selectedElements = [];
	var callback = function() {}
	var hoverIn = function(e) {
		var el = e.target;
		el.style.outline = "3px solid #5AB6E0";
	}
	var hoverOut = function(e) {
		var el = e.target;
		el.style.outline = "none";
	}
	var selectorClick = function(e) {
		e.stopPropagation();
		
		if(typeof callback === 'function') {
			callback();
		}
		
		var el = e.target;
		el.style.outline = "3px solid red";
		setTimeout(function() {
			el.style.outline = "none";
		}, 5000);
		selectedElements.push(el);
		removeEvents();
		return el;
	}
	var getMostRecentSelection = function() {
		return (selectedElements.length > 0)
			? selectedElements[selectedElements.length-1]
			: selectedElements[0];
	}
	var init = function(customCallback) {
		addEvents(customCallback);
	}
	var addEvents = function(customCallback) {
		callback = customCallback;
		document.addEventListener('mouseover', hoverIn, this);
		document.addEventListener('mouseout', hoverOut, this);
		document.addEventListener('click', selectorClick, this);
	}
	var removeEvents = function() {
		document.removeEventListener('mouseover', hoverIn, this);
		document.removeEventListener('mouseout', hoverOut, this);
		document.removeEventListener('click', selectorClick, this);
	}
	
	return (function(w) {
		w.DOMInspector = {
			selectedElements: selectedElements,
			startCapture: init,
			disable: removeEvents,
			getSelectedElement: getMostRecentSelection
		};
	})(w);
	
})(window);