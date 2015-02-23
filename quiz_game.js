/*
Quiz game using conditional statements,
and boolean principles
*/

// Establishing initial variable values;
var numberCorrect = 0;

//Asking question and checking to see if answer correct;
var playerAnswer1 = prompt('What is the parent company of Instagram?');
if (playerAnswer1.toLowerCase() === 'facebook') {
    numberCorrect += 1;
    alert('Congrats you have answered ' + numberCorrect + ' correctly');
} else {
    alert('Im sorry but that was wrong, better luck on the next question');
}

/*
Second question checks to see if they have gotten any correct yet if not
offers some encourgement
*/
var playerAnswer2 = prompt('What company makes the iPad?');
if (playerAnswer2.toLowerCase() === 'apple') {
    numberCorrect += 1;
    alert('Congrats you have answered ' + numberCorrect + ' correctly');
} else if (numberCorrect === 0) {
    alert('Come on you havent gotten any questions right yet');
} else {
    alert('You have gotten ' + numberCorrect + ' correct so far');
}

/* Third question with checks to see how many 
have been anwsered correctly and displays message based 
on number correct
*/
var playerAnswer3 = prompt('What company makes the surface tablet');
if (playerAnswer3.toLowerCase() === 'microsoft') {
    numberCorrect += 1;
    alert('Congrats you have answered ' + numberCorrect + ' correctly');
} else if (numberCorrect === 0) {
    alert('Are you that stupid this isn\'t hard');
} else if (numberCorrect === 1) {
    alert('Only ' + numberCorrect + '  you can do better');
} else if (numberCorrect === 2) {
    alert('You got ' + numberCorrect + ' so far not bad');
}

// another question with multiple answer outcomes;
var playerAnswer4 = prompt('What team does Kobe Bryant play for');
if (playerAnswer4.toLowerCase() === 'lakers' || playerAnswer4.toLowerCase === 'the lakers') {
    numberCorrect += 1;
    alert('Congrats you have answered ' + numberCorrect + ' correctly');
} else if (numberCorrect === 0) {
    alert('You are a special kind of stupid to have ' + numberCorrect + ' correct');
} else if (numberCorrect === 1) {
    alert('only ' + numberCorrect + ' LOL come on dont make me laugh');
} else if (numberCorrect === 2) {
    alert('You got ' + numberCorrect + ' try harder');
} else if (numberCorrect === 3) {
    alert('You got ' + numberCorrect + ' so far not bad keep it up');
}

//Final question;
var playerAnswer5 = prompt('Who is the founder of microsoft?');
if (playerAnswer5.toLowerCase() === 'bill gates') {
    numberCorrect += 1;
    alert('Congrats you have answered ' + numberCorrect + ' correctly');
} else if (numberCorrect === 0) {
    alert(' I feel sorry that you are the dumbest person on the internet. ' + numberCorrect + ' correct.');
} else if (numberCorrect === 1) {
    alert('you are kind of pitiful to have ' + numberCorrect + ' correct');
} else if (numberCorrect === 2) {
    alert('You got ' + numberCorrect + ' not that bad could be better');
} else if (numberCorrect === 3) {
    alert('You got ' + numberCorrect + ' barely passed ');
} else if (numberCorrect === 4) {
    alert('You got ' + numberCorrect + ' alsmost perfect');
}

//Begin ranking and badge deffinition;
if (numberCorrect === 5) {
    document.write('<p>You got the GOld medal for answering ' + numberCorrect + ' correct amazing job</p>');
} else if (numberCorrect <= 4 && numberCorrect >= 3) {
    document.write('<p>you got the SLIVER medal for answering ' + numberCorrect + ' correct good job</p>');
} else if (numberCorrect <= 2 && numberCorrect >= 1) {
    document.write('<p> you got the bronze medal for answering ' + numberCorrect + ' correct you are average');
} else if (numberCorrect === 0) {
    document.write('You need to reboot your brain for being a complete DUMB ASS!!!!');
}
var finalMessage = ('<a href="index.html"><h4>Click here to play again</h4></a>');
document.write(finalMessage);
