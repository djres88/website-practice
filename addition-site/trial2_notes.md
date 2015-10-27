#Notes from Trial 2
The only thing you missed: remembering to put the variables inside the `.click()` function.

The variables ARE global. Here's the problem, though: the `.val()` method in jQuery looks at a field and takes a snapshot of the *current* values. When the page loads, the current values are 0. Do you see the problem with this code?
```javascript
$(document).ready(function() {
  var myVariable = ("#elementID").val();
  $("#square").click(function() {
    alert(myVariable*2);
  });
});
```
The problem is that `myVariable` takes the value of `elementID` *as soon as the page is ready*. We want myVariable to take the value of `elementID` *after the user clicks the square button*. This gives the user a chance to change the value of our variable before we run the `click` function. Here's the correct version:

```javascript
(document).ready(function() {
  $("#square").click(function() {
    var myVariable = ("#elementID").val();
    alert(myVariable*2);
  });
});
```
Note that myVariable is defined *within* the click function. Now the code should work properly.
