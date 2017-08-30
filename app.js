var myInput = document.getElementById("my-input");

myInput.onfocus = function() {
    "use strict";
    myInput.setAttribute('data-place', this.getAttribute("placeholder"));
    myInput.setAttribute("placeholder", " ");
};

myInput.onblur = function() {
    "use strict";
    myInput.setAttribute('placeholder', this.getAttribute("data-place"));
    myInput.setAttribute("data-place", " ");
};