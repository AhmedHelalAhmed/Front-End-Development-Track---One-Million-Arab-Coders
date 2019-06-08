console.log({ name: 'Richard' } === { name: 'Richard' });//false
var a = {
    myFunction: function quiz() { console.log('hi'); }
};
var b = {
    myFunction: function quiz() { console.log('hi'); }
};
console.log(a.myFunction === b.myFunction);//false


function quiz() { console.log('hello'); }

var a = {
    myFunction: quiz
};
var b = {
    myFunction: quiz
}

console.log(a.myFunction === b.myFunction);


function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);



/*
    have the same target
    have the same type
    and pass the exact same listener
*/



// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});



document.addEventListener('click', function () {
    console.log('The document was clicked');
 });
 
 document.body.addEventListener('click', function () {
     console.log('The document body was clicked');
 });

 document.addEventListener('click', function () {
    console.log('The document was clicked');
 }, true);

 
 document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

// Chrome DevTools

// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
