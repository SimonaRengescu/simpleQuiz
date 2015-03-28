/*
Quiz game built using a two dimenionsal array
and loop
*/

var questionsLeft,
    playerResponse,
    questionsCorrect = [],
    questionsWrong = [],
    playerScore;
//Array of objects containing questions and answers.;
var questionArray = [
    {
        question: 'What label is Kendrick Lamar signed to?',
        answer: 'interscope'
    },
    {
        question: 'What label is J.Cole signed to?',
        answer: 'rocnation'
    },
    {
        question: 'What label is Wale signed to?',
        answer: 'MMG'
    },
    {
        question: 'What is the capital of New York state?',
        answer: 'albany'
    },
    {
        question: 'What is the markup language of the internet?',
        answer: 'HTML'
    },
    {
        question: 'Which languange is used to style internet pages?',
        answer: 'CSS'
    }
];
//establishing functions;

//fucntion to print message;
function print(message) {
    var outputDiv = document.getElementById('main');
    outputDiv.innerHTML = message;
}
/*
function to print list of questions that were answered
right or wrong
*/
function finalStatement(array) {
    var statment = '<ol>',
        x;
    for (x = 0; x < array.length; x += 1) {
        statment += '<li>' + array[x] + '</li>';
    }
    statment += '</ol>';
    return statment;
}

//function to loop and ask questions and keep track or right or wrong;
function questionRun(array) {
    var x;
    questionsLeft = array.length - 1;
    for (x = 0; x < array.length; x += 1) {
        playerResponse = prompt(array[x].question + ' [' + questionsLeft + ']' + ' questions left');
        questionsLeft -= 1;
        if (playerResponse === array[x].answer) {
            questionsCorrect.push(array[x].question);
        } else {
            questionsWrong.push(array[x].question);
        }
    }
}
//Run question function;
questionRun(questionArray);
//Set player score based on how many items pushed to correct array;
playerScore = questionsCorrect.length;
var html = '<p>You have answered ' + playerScore + ' questions correctly</p>';
html += 'These are the questions you got correct';
html += finalStatement(questionsCorrect);
html += '<p>These are the questions you got wrong</p>';
html += finalStatement(questionsWrong);
print(html);

