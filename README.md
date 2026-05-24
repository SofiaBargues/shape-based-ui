### 196. Grid Lights Interactive Shape

**Interview Question:** How to create an interactive Grid Lights shape?  
**Topic:** JavaScript, React.js, HTML  
**Difficulty:** Easy  
**Asked by:** Uber, Rippling

In this challenge, you need to build an interactive shape called **Grid Lights** using a given 2D array.

The shape is created by rendering an empty box wherever the array value is `1`. Values that are not `1` should not render a selectable box.

This question has reportedly appeared in frontend coding interviews at companies such as Uber.

## Functional Requirements

- Render an empty box for every `1` in the given 2D array.
- The user should be able to select a box.
- When a box is selected, its background color should change to `#0bcc59`.
- Once all available boxes are selected, the boxes should automatically deselect in the same order they were selected.
- The deselection process must be non-interruptible.
- While deselection is in progress, the user should not be able to select any box.
