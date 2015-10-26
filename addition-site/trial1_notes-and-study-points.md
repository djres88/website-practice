#Notes & Study Points from Trial 1

##jQuery/JavaScript Troubleshooting Checklist
  * If your jQuery source is a URL (i.e. src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.js"), then
 your HTML page won't work unless you're connected to the Internet. Hopefully the "why" makes sense to you. So if you're having internet problems, use the actual jQuery code as your source (see separate file, **jquery_code**).
 * Did you remember `type="text/javascript"` in the opening script tag?
 * Did you remember the `$(document).ready(...` function?
 * Are all HTML elements referenced correctly?
   1. Is there a preceding `$()` for all reference elements?
   2. Are the elements in quotes? Ex: `$("element")`
   3. Are classes referenced using a **"."**? Ex: `$(".className")`
   4. Are IDs referenced using a **"#"?** Ex: `$("#elementID")`
 * Do the elements referenced in jQuery match the HTML element names? Are their IDs missing from the HTML section?
 * Are your functions closed correctly (with parentheses, brackets)?
 * Where necessary, are your fields converted to values using `.val()`?

##HTML Troubleshooting Checklist
  * Make sure there are no spaces around the "=".
  * Do your inputs have the correct type? See http://www.w3schools.com/html/html_form_input_types.asp
  * Are all your property definitions in quotes (e.g. `class="fields"`)

##CSS Troubleshooting Checklist
  * Are all property definitions followed by a colon and closed by a semicolon? Example: `margin-top: 60px;`
  * Are all class/ID definitions opened and closed by brackets **{}**?
  * Are IDs preceded by a **#**? Example: `#calculator {property1: 50px;...}`
  * Are classes preceded by a **.**? Example: `.fields {color: black;...}`
<hr>

##Problems This Round (10-26)
1. jQuery Syntax Errors
  * Remembering the #
  * Remembering the $
  * Remembering the "" around html elements
2. JavaScript: reference variables INSIDE desired function
3. Input Types (review http://www.w3schools.com/html/html_form_input_types.asp)
