//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Create a new p element with the text "DOM load success"
  var p = document.createElement("p");
  var text = document.createTextNode("DOM load success");
  p.appendChild(text);

  // Add the new p element to the body of the HTML document
  document.body.appendChild(p);
});
