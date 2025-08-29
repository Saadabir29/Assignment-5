1. 
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll -

i). getElementById - selects one element by its id.
ii)getElementsByClassName - selects all elements with the same class (HTMLCollection).
iii)querySelector - selects the first element that matches a CSS selector.
iv)querySelectorAll - selects all elements that match a CSS selector (NodeList).

2. 
We use document.createElement() to make a new element, set its text/attributes, then add it using appendChild() or similar.

For example:
let p = document.createElement("p");
p.textContent = "Hello Saad!!!";
document.body.appendChild(p);

3. 
When an event happens on an element, it first runs on that element and then moves up to its parent, grandparent, and so on until the root. 
Example: a click on a button also triggers the div containing it.

4. 
Event delegation means attaching one event listener to a parent element and handling its child elements through event.target.
It’s useful because it saves memory (fewer listeners) and works for new elements added later.

5. 
Difference between preventDefault() and stopPropagation() -

i) preventDefault() - stops the browser’s default action (e.g., prevent form submit, stop link from opening).
ii) stopPropagation() - stops the event from bubbling up to parent elements.
