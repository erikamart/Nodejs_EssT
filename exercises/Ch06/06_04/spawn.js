//  CREATE CHILD PROCESS WITH SPAWN

// Execute is designed to handle synchronous processes, but NOT asynchronous processes. Consider the question app that was built in Chapter 4. It's files are in this folder. If you run in terminal "~$ node questions", you will notice that it runs asynchronously. It collects input and waits for more input before continuing. Therefore, you wouldn't want to Execute this process, you'd want to Spawn it. That is what the code below is doing. In line 7, you use cp.spawn. Then the 1st argument is the command that is going to be spawned, in this case it is "node". The rest of the arguments have to be in the format of an array and so here it is the "questions.js" file inside of array brackets. Now that this is set up, you communicate with this process with stdin or stdout. Lines 9-11 uses stdout so when the questionApp spits out any data to the terminal, it can be handled with a callback function that will in turn just log it out to the console. Lines 13-15 is to listen for when the questionsApp closes. When there is a close event it will write out to the console that the process exited. See this in action by running the code block in lines 5-15 below. You will see that this is an asynchronous function that spawns the first question and does not close. However, if you would like to make it answer the questions to continue on its own, this is possible! Comment this code block out and continue to the next section below.

// const cp = require("child_process");

// const questionApp = cp.spawn("node", ["questions.js"]);

// questionApp.stdout.on("data", data => {
//   console.log(`from the question app: ${data}`);
// });

// questionApp.on("close", () => {
//   console.log(`questionApp process exited`);
// });


// You can send data to your spawn process by using stdin. This is how you communicate with your processes. You can set up this code to be able to answer all three of the questions in the app by adding lines 24-26 seen below. Run this module. You will notice that the application runs all at once and sort of jumbled together because it is answering all three questions at once. It's listening for data from the question app and printing that to the terminal. Since the question app has a close event, this process listens for it, hears it and exits the process accordingly. 

const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("NodeUser \n");
questionApp.stdin.write("The Universe \n");
questionApp.stdin.write("Learn! \n");

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});


// The next courses to take are "Advanced Node.js" which focuses on asynchronous programming and data streaming with Node. Also, "Advanced Node.js: Scaling Applications" explores topics like cloning, database scaling, and decomposing apps into micro services.