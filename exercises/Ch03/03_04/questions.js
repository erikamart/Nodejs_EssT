// STANDARD OUTPUT

// You will begin to build a simple question and answer app that runs in the terminal. A feature to focus on here is the process object standard input and standard output. These objects offer a way to communicate with the process while it's running. These objects can be used to read and write data from the terminal. For this example, you will focus on the process.stdout. It is a writeable string that implements a write method. This write method is used to send data out of the program. It can actually write a string to the terminal. To see this, run lines 5 & 6 in the terminal with "~$ node questions". You should see the string "Hello World" and 3 new blank lines before the terminal input ~$ appears ready again. Note that we previously used the standard output with console.log and every log instance appears on its own line, so basically it automatically adds a new line for each message. The difference here is that the process.stdout.write() method gives more control over the string. Lines 5 & 6 make two calls to stdout.write and yet you still see "Hello World" printed on a single line. Comment lines 5 & 6 and continue to the next section below.

// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");


// Now use the standard output object to ask questions. These are on lines 11-15. Next, on lines 17-20 is the function used to ask a question. Line 17 is the ask function that takes in an argument, i, that is the index of the question to be asked. If no argument is sent, that index will be zero. Line 18 uses process.stdout.write() to send out a template string in backticks. The string adds a couple of lines between questions and the questions are asked using the questions array, so it is asked at the index. Therefore, if "i" is zero the first question will be asked "What is your name?". If "i" is two then the last question in the array is asked. Line 19 is another process.stdout.write() to prompt the user for an answer, so the side carrot is used to display a prompt. Finally, line 22 is to invoke the ask() function to ask a question. Now run this in the terminal with "~$ node questions".

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

// The process results in 3 blank lines, then the first question followed by the prompt side carrot and then it exits. However, the exit is also directly followed by the next terminal start prompt. It's kind of a mashed up mess. The code actually forced the terminal prompt to start where it does because of the last process.stdout.write() method that was used. Remember that this method allows you the control over new lines and you need to use them when needed.The reason why the program exits here too is because this nodeJS module is running synchronously. Meaning that you declared the questions array, declared a function asking for the question, then once the question is asked the module sees that there's nothing else to do so it stops and exits. It hasn't been told to ask the question and wait for an input response from the user. That will be explained in the next chapter.