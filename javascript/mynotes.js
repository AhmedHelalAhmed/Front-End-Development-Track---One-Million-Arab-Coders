// https://developers.google.com/web/tools/chrome-devtools/shortcuts

// https://thecatapi.com/api/images/get?format=src&type=gif

document.body.addEventListener('click', function () {
    var myParent = document.getElementById("Banner");
    var myImage = document.createElement("img");
    myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "160px";
});



// -------------------------------------------//
/*
null refers to the "value of nothing", while undefined refers to the "absence of value".
*/