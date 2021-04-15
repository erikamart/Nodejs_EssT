// STANDARD INPUT

// You use the process.stdin object to listen for answers and create an asyncronous application. Since this application will be listening for data it will be open and running to wait for data input and then echo it back to the user once there is input. To do this, use the same code built in 03_04, to wire up an event listener using standard input to listen for events. This is on line 18. You use the .on() function to listen for events. Then the 1st argument will listen for a "data" event. This means that the user has typed data into the keyboard and pressed enter. The 2nd argument of this function is the handler of the function used to handle that event. Here it will collect the data and send it back to a callback function to do something with it (data => {}). For now it will simply echo the data back to the user with the process.stdout.write() function. So, line 19 will take the data that is currently passed into the function in the form of a buffer or binary and call .toString() to convert it as well as call .trim() to trim off leading spaces. Then it will add a few new lines with \n before and after the new string. If run lines 5-20 in the terminal you will find that the first question is asked and then it waits for an answer. When you provide the answer the program echos back the answer, but it continues to wait. It does not continue to the next question nor exit. Comment out this code block and continue below to see how to fix this issue.

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

process.stdin.on('data', data => {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
});



// First you need to address that the application does not exit. Below you will see that a process.exit() has been added on line 41. This will invoke an exit event. So if you run the application again it will ask the first question, wait for a response, echo back the users response, and then exit. That's great! Except what about the other questions in the array and their answers? Comment out this code block for lines 26-42 and continue below to see how to fix this.

// const questions = [
//     "What is your name?",
//     "What would you rather be doing?",
//     "What is your preferred programming language?"
// ];

// const ask = (i = 0) => {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// };

// ask();

// process.stdin.on('data', data => {
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
//     process.exit();
// });


// Instead of simply echoing the data back, you'll want to create an array of answers to collect the input given by the user. Lines 60-69 is the function that collects the answers. Note that this replaces the code from lines 39-42 above. Line 60 creates a constant variable called "answers" and assigns it to an empty array. Line 61 is still the same as line 39, except the callback function instructions change. Line 62 takes the empty array and uses a JS method, .push(), to add onto that array. It will add the users input data and then convert it like before with .toString() chanined with .trim(). Then line 64 begins an IF/ELSE statement that will compare the amount of answers to questions to verify if it should ask the next question or if all the questions have been asked. If all the questions have been asked, the ELSE statement on lines 66-68 will process an exit for the application to exit. The final thing to do is to handle the process.exit() event when it fires. An event listener can be wired up to handle the exit event as is seen on lines 71-80. This listener can be handled with a callback function passed as the 2nd argument. Line 72 will write the users answers back in the form of an array. Line 73 is using array destructuring in a template string with backticks. The template string will honor white space. Run the application to test this. Now you have a complete question and answer application.

// const questions = [
//     "What is your name?",
//     "What would you rather be doing?",
//     "What is your preferred programming language?"
// ];

// const ask = (i = 0) => {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// };

// ask();

// const answers = [];
// process.stdin.on('data', data => {
//     answers.push(data.toString().trim());

//     if (answers.length < questions.length) {
//         ask(answers.length);
//     } else {
//         process.exit();
//     }
// });

// process.on('exit', () => {
//     const [name, activity, lang] = answers;
//     console.log(`

// Thank you for your answers.

// Go ${activity} ${name} you can write ${lang} code later!!

//     `);
// });