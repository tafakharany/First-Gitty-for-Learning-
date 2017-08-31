//PlaceHolder  
/*var myInput = document.getElementById("my-input");

myInput.onfocus = function() {
    "use strict";
    myInput.setAttribute('data-place', this.getAttribute("placeholder"));
    myInput.setAttribute("placeholder", " ");
};

myInput.onblur = function() {
    "use strict";
    myInput.setAttribute('placeholder', this.getAttribute("data-place"));
    myInput.setAttribute("data-place", " ");
};*/

/*TypeWriter*/
/*
var myText =
    "Create an offline installation of Visual Studio 2017 If you are looking for an offline option for installing Visual Studio 2017, we can point you in the right direction. If you want to install a single instance of Visual Studio 2017 but your internet connection is unavailable or unreliable, see our Install Visual Studio 2017 on low bandwidth or unreliable network environments page. If you are an enterprise administrator who wants to perform a large deployment of Visual Studio 2017 to a network of client workstations that are firewalled from the internet, see our Create a network installation of Visual Studio 2017 and Special considerations for installing Visual Studio in an offline environment pages.",
    i = 0,
    mybutton = document.getElementById("btn");
mybutton.onclick = function() {
    "use strict";
    var typeWriter = setInterval(function() {

        document.getElementById("type").textContent += myText[i];
        i++;
        if (i > myText.length - 1)
            clearInterval(typeWriter, 100);
    }, 200);
};
*/