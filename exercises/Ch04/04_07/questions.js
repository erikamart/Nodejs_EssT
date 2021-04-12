const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer =>
    console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());

// Here, we changed lines 9 and added 11-13. So whenever there's an answerEvent, it will add the question answered to the console. This just repeats all of the answers back as they occur to the user using the EventEmitter.

// The code is improved by adding a "complete" event on line 15. You take the callback function in the 2nd argument from line 9 and use it as the 2nd argument on line 15; then move the process.exit to another event on line 20. This shows you can wire up as many of these as you like. Notice there are 2 listeners for the complete event. Now when the process is finished, it's going to say thank you for your answer and log the answers and also will exit the process.

// In summary, you can see that questions answered, thank you for our answers, and the process has exited. This improved the collectAnswers function by giving the consumers more options. You can wire up as many listeners as you want to handle all sorts of events as the user is answering questions. 