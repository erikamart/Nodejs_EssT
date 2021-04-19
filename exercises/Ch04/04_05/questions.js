// CREATE A MODULE

// In chapter 2 a "collectAnswers()" function was made to collect answers from an array of questions. This is a perfect case to make a reausable function that should be moved to it's own module. To begin, the lib folder was created to contain the collectAnswers.js file. The questions.js file is then altered and saved as the collectAnswers.js file into the lib directory. Go open that file to see further detail.

// After creating the collectAnswers.js file and saving it into the lib directory, the below code block is what needs to be in the questions.js file. Line 7 is the constant variable created to load the collectAnswers() function using the require() function and it's file path. Then the array of questions is on lines 9-13. If you now run this in terminal with "~$ node questions" you will see the same output as from the Chapter 2 creation where the questions are given, it waits for an answer, when all questions have been asked, the app thanks you for the answers, supplies an array of your answers, and exits. Comment out this code block and continue on below.

const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});

// It is important to note that the collectAnswers() function in lines 15-19 contains an important callback function to send the answers with the questions at the end of the module. If you removed the entire 2nd argument, called answers, you would get an error re-running the process without it. Try it by commenting out the code above and uncommenting the one below and then running in terminal. The best solution to this is to make that "done" callback optional for the users. Go look at the collectAnswers.js file again to continue part 2.

// const collectAnswers = require("./lib/collectAnswers");

// const questions = [
//     "What is your name? ",
//     "Where do you live? ",
//     "What are you going to do with node js? "
// ];

// collectAnswers(questions);