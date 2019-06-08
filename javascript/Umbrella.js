/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } else {
            return "The umbrella is already closed!";
        }
    },
    // your code goes here
};
/*
primitive data types
strings
numbers
null
booleans
undefined
*/