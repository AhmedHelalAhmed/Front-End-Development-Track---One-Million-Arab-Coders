/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num

    var word1 = ((num == 1) ? "bottle" : "bottles");
    var word2 = ((num - 1 == 1) ? "bottle" : "bottles");
    console.log(num + ' ' + word1 + " of juice on the wall! " + num + ' ' + word1 + " of juice! Take one down, pass it around... " + (num - 1) + ' ' + word2 + " of juice on the wall!");
    num--;
}
