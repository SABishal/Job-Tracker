1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
Answer:<br>
       getElementById → Selects by ID (single element)<br>
       getElementsByClassName → Selects by class (live HTMLCollection)<br>
       querySelector → Selects first match using any CSS selector<br>
       querySelectorAll → Selects all matches (static NodeList)
   
2. How do you create and insert a new element into the DOM?<br>
Answer:<br>
        Create: document.createElement('tag')<br>
        Insert: parent.appendChild(child)
   
3. What is Event Bubbling? And how does it work?<br>
Answer:<br>
        Event bubbles from target element up to ancestors.<br>
        Click child → triggers child first, then parent, then grandparent.

4. What is Event Delegation in JavaScript? Why is it useful?<br>
Answer:<br>
        Attach one listener to a parent to handle events for multiple children.<br>
        Useful for better performance and dynamic elements.

6. What is the difference between preventDefault() and stopPropagation() methods?<br>
Answer:<br>
        preventDefault() → Stops default browser action (like form submit or link click)<br>
        stopPropagation() → Stops event from bubbling up to parent elements
