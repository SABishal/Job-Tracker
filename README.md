1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
       getElementById → Selects by ID (single element)
       getElementsByClassName → Selects by class (live HTMLCollection)
       querySelector → Selects first match using any CSS selector
       querySelectorAll → Selects all matches (static NodeList)
   
2. How do you create and insert a new element into the DOM?
Answer:
        Create: document.createElement('tag')
        Insert: parent.appendChild(child)
   
3. What is Event Bubbling? And how does it work?
Answer:
        Event bubbles from target element up to ancestors.
        Click child → triggers child first, then parent, then grandparent.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
        Attach one listener to a parent to handle events for multiple children.
        Useful for better performance and dynamic elements.

6. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
        preventDefault() → Stops default browser action (like form submit or link click)
        stopPropagation() → Stops event from bubbling up to parent elements
