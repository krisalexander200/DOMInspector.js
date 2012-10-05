# DOMInspector.js
================

**Easily enable the DOM inspector to mouse over items on your page, then upon click, you can retrieve the element.**


## How To Use DOMInspector:
```
//Start the mouseover / click capture, and add a callback function to be called when click occurs
DOMInspector.startCapture( myCallbackFunction );

...

function myCallbackFunction() {
	console.log( 'Selected Element: ', DOMInspector.getSelectedElement() );
}

```