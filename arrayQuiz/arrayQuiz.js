/*
Quiz game built using a two dimenionsal array
and loop
*/

var questionsLeft,
    playerResponse,
    questionsCorrect = [],
    questionsWrong = [],
    playerScore;

var questionArray = [
    ['What label is Kendrick Lamar signed to?', 'interscope'],
    ['What label is J.Cole signed to?', 'rocnation'],
    ['What label is Drake signed to?', 'young money'],
    ['What label is Travi$ Scott signed to?', 'grand hustle'],
    ['In which city do the yankees play in?', 'new york'],
    ['In which city do  the Heat play in?', 'miami']
];
//establishing functions;

//fucntion to print message;
function print(message) {
    document.write(message);
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
        playerResponse = prompt(array[x][0] + ' [' + questionsLeft + ']' + ' questions left');
        questionsLeft -= 1;
        if (playerResponse === array[x][1]) {
            questionsCorrect.push(array[x][0]);
        } else {
            questionsWrong.push(array[x][0]);
        }
    }
}
//Run question function;
questionRun(questionArray);
//Set player score based on how many items pushed to correct array;
playerScore = questionsCorrect.length;
print('<p>You have answered ' + playerScore + ' questions correctly</p>');
print('These are the questions you got correct');
print(finalStatement(questionsCorrect));
print('These are the questions you got wrong');
print(finalStatement(questionsWrong));

