//  COLLECT INFORMATION WITH READLINE

// Readline is another core module in node JS. It uses readable and writeable streams in a created interface. In this case you will use it to prompt a user with a question and collect their answers. Line 5 loads the readline module using the require function. You must create an interface for readline to work. Therefore, line 7 does just that by declaring a constant variable and assigning it to readline.createInterface() function. Within this function you have to supply an object that tells readline what streams to use for input and output. Lines 8 & 9 do this using process.stdin for input and process.stdout for output respectively. This gives the ability to ask questions and collect input from the terminal. Next, to ask a question you use the question function that's available in the interface. Line 12 shows the rl.question function. The 1st argument is the string for the question that will be asked. The 2nd argument is a callback function that has the answer supplied as an argument to that callback function. Once that question has been answered, the instruction is to echo back the answer given to the user. If you run the code in terminal you should see the question be asked and the terminal wait for an answer. This is an asynchronous process running because it waits for an answer. Once you enter an answer the process will return your answer back to you.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like Node? ", answer => {
    console.log(`Your answer: ${answer}`);
});