(favNumber = function (num = 3) {
    document.write("My favorite number is " + num + " ");
  })();
  
  favNumber(5);

// catch on document
document.addEventListener("hello", function(event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
  });

  // dispatch on elem
  let event = new Event("hello", {bubbles: true}); // (2)
  elem.dispatchEvent(event);

  // display message

menu.onclick = function() {
    alert(1);
    setTimeout(() => menu.dispatchEvent(new CustomEvent("menu-open", {
      bubbles: true
    })));

    alert(2);
  };

  document.addEventListener('menu-open', () => alert('done'));