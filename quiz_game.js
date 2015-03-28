/*
Quiz game V2 coded with functions instead of repeating variables
*/

// Establishing initial variable values;
var numberCorrect = 0;

//Establishing Function for asking the question and outputting score;
function questionRoot(questionContent, questionAnswer) {
    var playerResponse = prompt(questionContent);
    if (playerResponse.toLowerCase() === questionAnswer.toLowerCase()) {
        numberCorrect += 1;
        alert('Correct!!! you have answered ' + numberCorrect + ' questions correct so far.');
    } else {
        alert('You got that one wrong the correct answer is ' + questionAnswer);
    }
    
}

//inputing arguments and executing  function questionRoot;
questionRoot('Who is the parent company of Instagram', 'facebook');

questionRoot('What company makes the iPad?', 'apple');

questionRoot('Which company makes the Surface Pro Tablet', 'microsoft');

questionRoot('What team does Kobe Bryant play for', 'lakers');

questionRoot('Who is the founder of microsoft?', 'bill gates');


//Begin ranking and badge deffinition;
if (numberCorrect === 5) {
    document.write('<p>You got the GOld medal for answering ' + numberCorrect + ' correct amazing job</p>');
} else if (numberCorrect >= 3) {
    document.write('<p>you got the SLIVER medal for answering ' + numberCorrect + ' correct good job</p>');
} else if (numberCorrect >= 1) {
    document.write('<p> you got the bronze medal for answering ' + numberCorrect + ' correct you are average');
} else if (numberCorrect === 0) {
    document.write('You need to reboot your brain !!!!');
}
var finalMessage = ('<a href="index.html"><h4>Click here to play again</h4></a>');
document.write(finalMessage);
