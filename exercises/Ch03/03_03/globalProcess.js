// ARGUMENT VARIABLES WITH PROCESS.ARGV

// The process object can be accessed globally. It contains information about the current process and has tools to allow  interaction with that process. As example, line 5 below uses the process object to get the process ID. Line 6 uses the process object to get the current version of Node.js that's being used to run the process. 

// console.log(process.pid);
// console.log(process.versions.node);

// The process object can also be used to get environment information, read environment variables, communicate with the terminal or parent processes through standard input and standard output, and to exit the current process. The process object can also collect information from the terminal when it is loaded. This is specifically called process.argv. The "argv" are the argument variables that are sent to the process when it is run. The "argv" value is an array that contains everything typed to run the process. To see this in action, uncomment line 10 and run in terminal, "~$ node globalProcess". You will see that the first item in the array is the full path to where the node process lives and this is because the command typed to run this process was "node". The second item in the array is the full path to the globalProcess.js file, because that is the path to the current module that you're using. Anything typed when running a node file gets added to this process.argv array. For example, in the terminal, re-run this process but add something to the end of the command. i.e. "~$ node globalProcess Penny Monkey". You will see the resulting array appear like before with the addition of the names to the array. Re-comment the line when done and continue below.

// console.log(process.argv);


// Since process.argv is an array, you can work with it the same way you would an array. You can use array destructuring. As example, lets say you want to work with variables "firstName" and "lastName" as the third and fourth locations of the array respectively, while not caring about the first and second located variables at the start of the array. Line 15 does this. Then line 16 destructures the argv array to output the value of the variables. Run lines 15 & 16 in terminal (remembering to provide the values for the variables "firstName" and "lastName"!). Try something like, "~$ node globalProcess Penny Monkey". You should see the output say "Your name is Penny Monkey". This is how you can use the process.argv array to send arguments to a Node.js module when you run it.  Re-comment the lines when done and continue below.

// const [, , firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);


// Typically you don't just provide a value in the terminal (as in the case above with the names) without also providing flags to know what type of variables are being passed. Type into the terminal "~$ node globalProcess --user Penny --greeting "Hello there"". Note that the --greeting string is in quotations and the reason is because you don't want the space between the words to create another value within the process. Quotation marks help treat the value as one whole string. Now, you want to use a process to grab the values of the --user and --greeting flags from the terminal. To do this, you use the grab() function. Line 26 sets a constant variable called "greeting" and then assigns it the grab() function. Within that function it sends in the --greeting flag as the argument to obtain it's value. The same is done to find the value of --user. This is seen on line 27. Remember that the process.argv is an array. Therefore, you are looking to find the index of the flags to return the next value. To do this, you must build a grab() function as seen in lines 21-24. Breaking this down, we see that line 21 uses the arrow function to grab the flag sent to it. Line 22 is part of the function to find the index after the flag by using the process.argv array. Since it is an array, that is why you can use the JS .indexOf() command to search for the flag that will give the index of it. Also remember that you want the NEXT index value; hence why you add + 1. Line 23 is to return the value of the next flag that was found in line 22. Line 29 uses backticks to create a template string to print to console the resulting values for the flags. To test this, type and run in the terminal "~$ node globalProcess --user Penny --greeting "Hello there"". The result should be the terminal printing out "Hello there Penny".

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

// As an end note, the reason why you used a function to grab the values of the arguments that are passing in is because it will allow users to pass arguments in any order they want. Try it by typing into the terminal "~$ node globalProcess --greeting "Hello there" --user Penny". Note the flags are switched in order. You should see the same result as before!