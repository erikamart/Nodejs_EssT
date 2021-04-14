// CREATE CHILD PROCESS WITH EXEC

// There is a child process module that allows you to execute external processes in your environment. So this means nodeJS can run and communicate with other applications within the environment that is hosting it. Here we take a look at the two main functions: create a child process and spawn/execute.

// The child module. All of the commands are for synchronous operation. They run 1 time, give some data, and then end. The execute function is for syncronous commands. If you run only the code on lines 7-8 you will have a web browser automatically open up to the link shown. If you run only the code on lines 10-11, you will have a new instance of a terminal window open up on your computer. If you want the command to execute the return of data (like the 'ls' command) and you want to grab that data, you can run only the code on lines 13-19. In reference to lines 13-19, if you want to create an error to watch the module work, change 'ls' to 'lst' and run "~$ node exec". If you want to see the actual error that is returned from the command when it was exectued, you can add a 3rd argument to the code. Comment out lines 13-19 and continue to the next section for more detail.

const cp = require("child_process");
cp.exec("open http://www.linkedin.com/learning");

// const cp = require("child_process");
// cp.exec("open -a Terminal .");

// const cp = require("child_process");
// cp.exec("ls", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });


// To see the actual error from bash that is returned from the command when it was exectued, you can add a 3rd argument, stderr, to lines 25-26. Try it with the code below. Comment out lines 24-27 and continue to the next section.

// const cp = require("child_process");
// cp.exec("lst", (err, data, stderr) => {
//     console.log(stderr);
// });


// The execute command, can execute any synchronus process. This includes any nodeJS processes. You can run "node readStream" just as you would in the terminal, within the code here. Except this time when you run this file in the terminal with "~$ node exec", it is actually running another nodeJS process as well. Run the code block below to try this and see the result in your terminal.

// const cp = require("child_process");
// cp.exec("node readStream", (err, data, stderr) => {
//     console.log(data);
// });