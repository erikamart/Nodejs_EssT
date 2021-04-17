// USE READLINE FUNCTIONS

// This lesson will rebuild the question interface that was built in the last exercise, but this time using readline. The idea here is to have a variable that can hold all the questions in an array, have any number of questions, and have those questions asked to the user in the terminal. Lines 18-22 would be how to set up the variable with the array of questions. 

// In coding challenges you can try to think about what to do, and represent it as a function call. As example, you know at this point that you need to collect the answers that the user gave in the terminal. You can imagine that needs to be a function and can name it "collectAnswers". Still not knowing exactly how this function will work, you do know that you want to send it an array of questions, you want it to ask questions in the array, and you want it to get a list of answers back and handle that with a callback function. Lines 40-44 show the end result of what you want to do here so far. 

// Now that you have lines 40-44, you know that you need to declare that function "collectAnswers". Lines 24-38 does this. The 1st argument is the array of questions. The 2nd argument is the callback function called "done" that is invoked when the user has answered all the questions and the process finishes. The function body of this will have an empty array of answers to get started; line 25. The next thing to do is ask the question and collect the answers. This is where the readline will be used and therefore is the reason for lines 11-16 to exist in order to use it. So going back to the body of the "collectAnswers" function, line 26 is where you ask the first question from the "questions" array in a destructured format. Then you need the ability to ask that question. Line 37 uses a readline or rl.question function with arguments. Remember that in readline, the 1st argument needs to be the string while the 2nd argument is a function that will be invoked once the question is answered. So here, the 1st argument is "firstQuestion", and the 2nd argument will be a new "questionAnswered" function. Now you need to actually create this function! 

// So lines 28-35 is the declaration of the "qeustionAnswered" function that readline on line 37 will invoke once the user has answered the question. Therefore, you know this function is going to take in the "answer". You want to then push that answer into the "answers" array using the arrow function. Within the arrow function, line 29 uses .push() method from JS to do this. Next you want to check to see if the user has answered all the questions. Line 30-34 uses an IF/ELSE statement that utilizes the .length() method (from JS) to compare if answers.length is less than questions.length. If it is, then it should ask another question by invoking rl.question again on line 31. This time you would find which question specifically to continue with asking from the questions array by using answers.length. So, if there is one answer within the answers array, then it's going to ask questions[1], which would give the second question within the questions array. Once it has two answers, the answers array will be of length two, so it'll ask questions[2] which will give the third question. Now if answers.length is not less than questions.length, it means all questions have been asked and you're finished. So in the ELSE statement you can invoke done and pass all the answers back to the callback function. Try running this module in terminal with "~$ node questions". You should see the questions asked one at a time after the user inputs an answer and when all the questions have been asked the terminal thanks you for your answers and provides an array with the answers given.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [fistQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };

    rl.question(fistQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});